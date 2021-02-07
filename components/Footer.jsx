import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import {List, ListItem} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Email from "@material-ui/icons/Email";
import moment from 'moment'
import styles from '../assets/jss/nextjs-material-kit/components/footerStyle';

import Tooltip from "@material-ui/core/Tooltip";
import Button from "./Button";
import { Twitter, Instagram, Facebook, Phone } from "@material-ui/icons";
// @ts-ignore
const useStyles = makeStyles( styles );

export default function Footer( props ) {
    const classes = useStyles();
    const { whiteFont } = props;
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    const aClasses = classNames({
        [classes.a]: true,
        [classes.footerWhiteFont]: whiteFont
    });
    return (
        <footer className={footerClasses}>
            <div className={classes.container}>
                <div className={classes.left}>
                    <List className={classes.list}>
                        <ListItem className={classes.inlineBlock}>
                            <Email className={classes.icon} /> contacto@udenar.edu.co
                        </ListItem>
                        <br/>
                        <ListItem className={classes.inlineBlock}>
                            <Phone className={classes.icon}/> 316 546 73 46
                        </ListItem>
                    </List>
                </div>
                <div className={classes.right}>
                    &copy; {moment().format('yyyy')}, Todos los derechos reservados
                </div>
            </div>
        </footer>
    );
};

Footer.propTypes = {
    whiteFont: PropTypes.bool
};
