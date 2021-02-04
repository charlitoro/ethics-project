import React from 'react'
import {title} from "../../assets/jss/nextjs-material-kit";
import {makeStyles} from "@material-ui/core/styles";
import Chapter from "./Chapter";
import { map } from 'lodash'

const styles = {
    section: {
        padding: "70px 0",
        textAlign: "left"
    },
    title: {
        ...title,
        marginBottom: "1rem",
        marginTop: "30px",
        minHeight: "32px",
        textDecoration: "none"
    },
    description: {
        color: "#999"
    },
}

const useStyles = makeStyles(styles);

export default function Title( { number, name, id, chapters } ){
    const classes = useStyles();

    return (
        <div>
            <h2 className={classes.title}>Titulo {number}: {name}</h2>
            {
                map( chapters, ( { id, number, image, name, articles } ) => {
                    return <Chapter
                        key={id}
                        id={id}
                        number={number}
                        name={name}
                        image={image}
                        articles={articles}
                    />
                } )
            }
        </div>
    )
}
