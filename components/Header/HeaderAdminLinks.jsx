/*eslint-disable*/
import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import {Gavel, ExitToApp, Edit} from "@material-ui/icons";

// core components
import Button from "../Button";

import styles from "../../assets/jss/nextjs-material-kit/components/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderAdminLinks() {
    const classes = useStyles();
    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <Button href="/admin" color="transparent" className={classes.navLink}>
                    <Gavel className={classes.icons}/> Ley 842
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button href="/admin/administracion" color="transparent" className={classes.navLink}>
                    <Edit className={classes.icons}/> Administración
                </Button>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Button href="/admin" color="transparent" className={classes.navLink}>
                    <ExitToApp className={classes.icons} /> Cerrar Sesión
                </Button>
            </ListItem>
        </List>
    );
}
