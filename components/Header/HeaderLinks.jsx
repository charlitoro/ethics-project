/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import {Group, Gavel, Star} from "@material-ui/icons";

// core components
import Button from "../Button";

import styles from "../../assets/jss/nextjs-material-kit/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button href="/home" color="transparent" className={classes.navLink}>
                    <Star className={classes.icons}/> Home
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button href="/ley" color="transparent" className={classes.navLink}>
                    <Gavel className={classes.icons}/> Ley 842
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button href="/nosotros" color="transparent" className={classes.navLink}>
                    <Group className={classes.icons} /> Nosotros
                </Button>
            </ListItem>
        </List>
    );
}
