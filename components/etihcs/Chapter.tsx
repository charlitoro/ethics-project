import React from 'react'
import {title} from "../../assets/jss/nextjs-material-kit";
import {makeStyles} from "@material-ui/core/styles";
import { map } from 'lodash';
import parse from 'html-react-parser';

interface IArticle {
    id: string;
    number: number;
    name: string;
    content: string
}

export interface IChapter {
    id: string;
    number: number;
    name: string;
    image?: string;
    articles?: Array<IArticle>;
}

const styles = {
    section: {
        textAlign: "left"
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    content: {
        color: "#181616",
        textColor: "#181616",
        textAlign: "left"
    },
}

const useStyles = makeStyles(styles as any);

export default function Chapter ( { id, number, image, name, articles }: IChapter ) {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <h2 className={classes.title}>Capitulo {number}: {name}</h2>
            {
                map( articles, ( { id, name, number, content }: IArticle ) => {
                    return (
                        <div key={id}>
                            <h3 className={classes.title}>Articulo {number}: {name}</h3>
                            <div className={classes.content}>{parse(content)}</div>
                        </div>
                    )
                } )
            }
        </div>
    )
}
