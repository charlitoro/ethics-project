/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Icon from "@material-ui/core/Icon";

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
                <Link href="/">
                    <Button color="transparent" className={classes.navLink}>
                        <Star className={classes.icons}/> Inicio
                    </Button>
                </Link>
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


{/*<CustomDropdown*/}
{/*    noLiPadding*/}
{/*    navDropdown*/}
{/*    buttonText="Inicio"*/}
{/*    buttonProps={{*/}
{/*        className: classes.navLink,*/}
{/*        color: "transparent"*/}
{/*    }}*/}
{/*    buttonIcon={Star}*/}
{/*    dropdownList={[*/}
{/*        <Link href="/">*/}
{/*            <a className={classes.dropdownLink}>All components</a>*/}
{/*        </Link>,*/}
{/*        <a*/}
{/*            href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"*/}
{/*            target="_blank"*/}
{/*            className={classes.dropdownLink}*/}
{/*        >*/}
{/*            Documentation*/}
{/*        </a>*/}
{/*    ]}*/}
{/*/>*/}
