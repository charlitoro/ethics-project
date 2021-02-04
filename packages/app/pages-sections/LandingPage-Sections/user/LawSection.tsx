import React, {useEffect, useState} from "react";
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
import Title, { ITitle } from "../../../components/etihcs/Title";
import {executeQuery} from "../../../plugins/graphqlQueryRequest";
import { searchQuery } from "../../../utils/queries";
import { searchTitleQuery, searchChapterQuery, searchArticleQuery } from '../../../utils/queries'
import { map, forEach, get, findIndex, unionBy, unset } from "lodash";
import fetch from 'node-fetch';
import { API_URL, CLIENT_ID } from "../../../utils/constants";

const useStyles = makeStyles(styles as any);

enum SearchValue{
    TITLE = 'title',
    CHAPTER = 'chapter',
    ARTICLE = 'article'
}

const searchLawContent = (): any => {
    const { data } = executeQuery( searchQuery )
    if( data && data.titles ) {
        return data.titles
    }
}

export default function LawSection() {
    const classes = useStyles();
    const [searchValue, setSearchValue] = useState( SearchValue.TITLE );
    const [searchQuery, setSearchQuery] = useState( searchTitleQuery );
    const [searchText, setSearchText] = useState<String>( '' )
    const [searched, setSearched] = useState<any> ( searchLawContent() )

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = (event.target as HTMLInputElement).value
        if( value === SearchValue.TITLE  )
            setSearchQuery( searchTitleQuery )
        else if( value === SearchValue.CHAPTER )
            setSearchQuery( searchChapterQuery )
        else if( value === SearchValue.ARTICLE )
            setSearchQuery( searchArticleQuery )
        setSearchValue( value as SearchValue )
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
                if( searchValue === SearchValue.TITLE )
                    setSearched( data.titles )
                else if( searchValue === SearchValue.CHAPTER ) {
                    let setData: Array<any> = []
                    forEach(data.chapters, (chapter) => {
                        const index = findIndex(setData, {id: get(chapter, `title.id`)})
                        if (index !== -1)
                            setData[index].chapters = unionBy(setData[index].chapters, [{...chapter }], 'id')
                        else
                            setData = unionBy(setData, [{...chapter.title, chapters: [{...chapter}]}], 'id')
                    })
                    console.log( setData )
                    setSearched(setData)
                } else if( searchValue === SearchValue.ARTICLE ) {

                    const setChapterData = (chapters: Array<any>, article: any) => {
                        const index = findIndex(chapters, {id: get(article, `chapter.id`)})
                        if (index !== -1)
                            return chapters[index].articles = unionBy(chapters[index].articles, [{...article}], 'id')
                        else
                            return unionBy(chapters, [{...article.chapter, articles: [{...article}]}], 'id')
                    }

                    let setData: Array<any> = []
                    forEach(data.articles, (article) => {
                        const indexTitle = findIndex(setData, {id: get(article, `chapter.title.id`)})
                        if (indexTitle !== -1)
                            setData[indexTitle].chapters = setChapterData(setData[indexTitle].chapters, article)
                        else
                            setData = unionBy(setData, [{
                                ...get(article, `chapter.title`),
                                chapters: setChapterData([], article)
                            }])
                    })
                    console.log( setData )
                    setSearched(setData)
                }
            }
        } catch ( error ){
            console.log( '=> Error: ', error.message )
        }
    }
    const handlerSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText( event.target.value )
    }

    return (
        <div className={classes.section}>
            <h1 className={classes.title}>Búsqueda</h1>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <FormControl component="fieldset" >
                        <RadioGroup row aria-label="search" name="search" value={searchValue} onChange={handleRadioChange}>
                            <FormControlLabel
                                value="title"
                                control={<Radio />}
                                label="Titulo"
                                labelPlacement="bottom"
                                classes={{
                                    label: classes.label,
                                    root: classes.labelRoot
                                }}
                            />
                            <FormControlLabel
                                value="chapter"
                                control={<Radio />}
                                label="Capitulo"
                                labelPlacement="bottom"
                                classes={{
                                    label: classes.label,
                                    root: classes.labelRoot
                                }}
                            />
                            <FormControlLabel
                                value="article"
                                control={<Radio />}
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
                    <Button justIcon round color="white" onClick={handlerSearch}>
                        <Search className={classes.searchIcon} />
                    </Button>
                </GridItem>
            </GridContainer>
            <GridContainer className={classes.gridScroll} justify="center">
                { map( searched, ( { id, number, name, chapters }: ITitle ) => {
                    return(
                        <GridItem key={id} xs={12} sm={12} md={12} lg={8}>
                            <Title id={id} number={number} name={name} chapters={chapters} />
                        </GridItem>
                    )
                } ) }
            </GridContainer>
        </div>
    );
}
