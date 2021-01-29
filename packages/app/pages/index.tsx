import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import Button from "../components/Button";
import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from "../components/Parallax";

import styles from "../assets/jss/nextjs-material-kit/pages/landingPage";

// Sections for this page
import ProductSection from "../pages-sections/LandingPage-Sections/ProductSection";
import WorkSection from "../pages-sections/LandingPage-Sections/WorkSection";
import Link from "next/link";
import LandingPage from "../pages-sections/LandingPage-Sections/user/LandingPage";

const dashboardRoutes: Array<any> = [];

const useStyles = makeStyles(styles as any);

export default ( props: any ) =>  {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="NextJS Material Kit"
                rightLinks={<HeaderLinks />}
                fixed
                changeColorOnScroll={{
                    height: 400,
                    color: "white"
                }}
                {...rest}
            />
            <Parallax filter responsive image={require("assets/img/index-landing-bg.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Etica Profecional de Ingeniería y Sus Profecines Afines</h1>
                            <br />
                            <Link href="/ley">
                                <Button color="danger" size="lg" target="_blank" rel="noopener noreferrer" >
                                    <i className="fas fa-play" /> Ver Más
                                </Button>
                            </Link>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <LandingPage/>
                </div>
            </div>
            <Footer />
        </div>
    );
}
