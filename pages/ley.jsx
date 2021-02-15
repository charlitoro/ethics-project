import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import GridContainer from "../components/Grid/GridContainer";
import GridItem from "../components/Grid/GridItem";
import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from "../components/Parallax";

import styles from "../assets/jss/nextjs-material-kit/pages/landingPage";

// Sections for this page
import LawSection from "../pages-sections/LandingPage-Sections/user/LawSection";
//
import withData from '../plugins/apollo'
import CommentsSection from "../pages-sections/LandingPage-Sections/user/CommentsSection";


const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const Ley = ( props ) =>  {
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
            <Parallax filter responsive image={require("assets/img/ley-landing-bg.jpg")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Ley 842 de 2003</h1>
                            <h4 className={classes.title}>
                            Sección de búsqueda de títulos, capítulos o artículos de la ley 842 de 2003,
                            por la cual se modifica la reglamentación del ejercicio de la ingeniería de sus
                            profesiones afines y de sus profesiones auxiliares, se adopta el Código Ética Profesional
                            y se dictan otras disposiciones.
                            </h4>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <LawSection />
                    <CommentsSection />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default withData( Ley )
