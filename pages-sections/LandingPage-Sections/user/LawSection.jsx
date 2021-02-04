import React, { useState} from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Button from "../../../components/Button";

import styles from "../../../assets/jss/nextjs-material-kit/pages/landingPageSections/user/lawStyles";
import {
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
} from "@material-ui/core";
import CustomInput from "../../../components/CustomInput";
import { Search } from "@material-ui/icons";
import Title from "../../../components/etihcs/Title";
import {executeQuery} from "../../../plugins/graphqlQueryRequest";
import { searchQuery } from "../../../utils/queries";
import { searchTitleQuery, searchChapterQuery, searchArticleQuery } from '../../../utils/queries'
import { map, forEach, get, findIndex, unionBy } from "lodash";
import fetch from 'node-fetch';
import { API_URL, CLIENT_ID } from "../../../utils/constants";

const useStyles = makeStyles(styles);

const TITLE = 'title'
const  CHAPTER = 'chapter'
const ARTICLE = 'article'

const searchLawContent = () => {
    const { data } = executeQuery( searchQuery )
    if( data && data.titles ) {
        return data.titles
    }
}

export default function LawSection() {
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState( TITLE );
    const [searchQuery, setSearchQuery] = useState( searchTitleQuery );
    const [searchText, setSearchText] = useState( '' )
    const [searched, setSearched] = useState ( searchLawContent() )

    const handleRadioChange = (event) => {
        const value = (event.target).value
        if( value === TITLE  )
            setSearchQuery( searchTitleQuery )
        else if( value === CHAPTER )
            setSearchQuery( searchChapterQuery )
        else if( value === ARTICLE )
            setSearchQuery( searchArticleQuery )
        setSearchValue( value )
    };

    const handlerSearch = async () => {
        try {
            const response = await fetch( `${API_URL}`, {
                method: 'POST',
                body: JSON.stringify({
                    query: searchQuery,
                    variables: { text: searchText }
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `client_id ${CLIENT_ID}`
                }
            } ).then( (res) => res.json() )
            if( response.data ){
                const data = response.data
                if( searchValue === TITLE )
                    setSearched( data.titles )
                else if( searchValue === CHAPTER ) {
                    let setData = []
                    forEach(data.chapters, (chapter) => {
                        if ( get(chapter, `title.id`) ) {
                            const index = findIndex(setData, {id: get(chapter, `title.id`)})
                            if (index !== -1)
                                setData[index].chapters = unionBy(setData[index].chapters, [{...chapter}], 'id')
                            else
                                setData = unionBy(setData, [{...chapter.title, chapters: [{...chapter}]}], 'id')
                        }
                    })
                    setSearched(setData)
                } else if( searchValue === ARTICLE ) {

                    const setChapterData = (chapters, article) => {
                        const index = findIndex(chapters, {id: get(article, `chapter.id`)})
                        if (index !== -1) {
                            chapters[index].articles = unionBy(chapters[index].articles, [{...article}], 'id')
                            return chapters
                        } else
                            return unionBy(chapters, [{...article.chapter, articles: [{...article}]}], 'id')
                    }

                    let setData = []
                    forEach(data.articles, (article) => {
                        if( get(article, `chapter.title.id`) ) {
                            const indexTitle = findIndex(setData, {id: get(article, `chapter.title.id`)})
                            if (indexTitle !== -1)
                                setData[indexTitle].chapters = setChapterData(setData[indexTitle].chapters, article)
                            else
                                setData = unionBy(setData, [{
                                    ...article.chapter.title,
                                    chapters: setChapterData([], article)
                                }], 'id')
                        }
                    })
                    setSearched(setData)
                }
            }
        } catch ( error ){
            console.log( '=> Error: ', error.message )
        }
    }
    const handlerSearchText = (event) => {
        setSearchText( event.target.value )
    }

    if( searched ) {
        return (
            <div className={classes.section}>
                <h1 className={classes.title}>Búsqueda</h1>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <FormControl component="fieldset">
                            <RadioGroup row aria-label="search" name="search" value={searchValue}
                                        onChange={handleRadioChange}>
                                <FormControlLabel
                                    value="title"
                                    control={<Radio/>}
                                    label="Titulo"
                                    labelPlacement="bottom"
                                    classes={{
                                        label: classes.label,
                                        root: classes.labelRoot
                                    }}
                                />
                                <FormControlLabel
                                    value="chapter"
                                    control={<Radio/>}
                                    label="Capitulo"
                                    labelPlacement="bottom"
                                    classes={{
                                        label: classes.label,
                                        root: classes.labelRoot
                                    }}
                                />
                                <FormControlLabel
                                    value="article"
                                    control={<Radio/>}
                                    label="Articulo"
                                    labelPlacement="bottom"
                                    classes={{
                                        label: classes.label,
                                        root: classes.labelRoot
                                    }}
                                />
                            </RadioGroup>
                        </FormControl>
                    </GridItem>
                </GridContainer>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={12} lg={4}>
                        <CustomInput
                            labelText="Búscar"
                            id="material"
                            onChange={handlerSearchText}
                            formControlProps={{
                                fullWidth: true
                            }}
                        />
                        <Button justIcon round color="rose" onClick={handlerSearch}>
                            <Search className={classes.searchIcon}/>
                        </Button>
                    </GridItem>
                </GridContainer>
                <GridContainer className={classes.gridScroll} justify="center">
                    {map(searched, ({id, number, name, chapters}) => {
                        return (
                            <GridItem key={id} xs={12} sm={12} md={12} lg={8}>
                                <Title id={id} number={number} name={name} chapters={chapters}/>
                            </GridItem>
                        )
                    })}
                </GridContainer>
            </div>
        );
    } else {
        return <div className={classes.section}>
            <h1>Loading...</h1>
        </div>
    }
}
