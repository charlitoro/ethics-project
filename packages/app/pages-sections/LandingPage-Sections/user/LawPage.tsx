import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import InfoArea from "../../../components/InfoArea";

import styles from "../../../assets/jss/nextjs-material-kit/pages/landingPageSections/user/lawStyles";
import {
    FormControl,
    FormControlLabel,
    FormLabel,
    RadioGroup,
    FormHelperText,
    Radio,
    InputAdornment
} from "@material-ui/core";
import CustomInput from "../../../components/CustomInput";
import { Search } from "@material-ui/icons";
import Title, { ITitle } from "../../../components/etihcs/Title";
import {executeQuery} from "../../../plugins/graphqlQueryRequest";
import { searchQuery } from "../../../utils/queries";
import { map } from "lodash";

const useStyles = makeStyles(styles as any);

const searchLawContent = (): Array<ITitle> | undefined => {
    const { data } = executeQuery( searchQuery )
    if( data && data.titles ) {
        console.log('====>', data.titles)
        return data.titles
    }
}

export default function LawPage() {
    const classes = useStyles();
    const [value, setValue] = useState('');
    const [search, setSearch] = useState<Array<ITitle> | undefined> ( searchLawContent() )

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue((event.target as HTMLInputElement).value);
    };

    return (
        <div className={classes.section}>
            <h1 className={classes.title}>Búsqueda</h1>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                    <FormControl component="fieldset" >
                        <RadioGroup row aria-label="search" name="search" value={value} onChange={handleRadioChange}>
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
                        formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Search />
                                </InputAdornment>
                            )
                        }}
                    />
                </GridItem>
            </GridContainer>
            <GridContainer justify="center">
                { map( search, ( { id, number, name, chapters }: ITitle ) => {
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
