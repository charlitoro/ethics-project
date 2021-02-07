import React from 'react'
import {title} from "../../assets/jss/nextjs-material-kit";
import {makeStyles} from "@material-ui/core/styles";
import { map } from 'lodash';
import parse from 'html-react-parser';

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

const useStyles = makeStyles(styles);

export default function Chapter ( { number, name, articles } ) {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <h3 className={classes.title}>Capitulo {number}: {name}</h3>
            {
                map( articles, ( { id, name, number, content } ) => {
                    return (
                        <div key={id}>
                            <h4 className={classes.title}>Articulo {number}: {name}</h4>
                            <div className={classes.content}>{parse(content)}</div>
                        </div>
                    )
                } )
            }
        </div>
    )
}
