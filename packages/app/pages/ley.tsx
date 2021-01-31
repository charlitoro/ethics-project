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
import HeaderLinks from "../components/Header/HeaderLinks";
import Parallax from "../components/Parallax";

import styles from "../assets/jss/nextjs-material-kit/pages/landingPage";

// Sections for this page
import LawPage from "../pages-sections/LandingPage-Sections/user/LawPage";
//
import withData from '../plugins/apollo'


const dashboardRoutes: Array<any> = [];

const useStyles = makeStyles(styles as any);

const Ley = ( props: any ) =>  {
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
                            <h4>
                                Sección de busqueda de titulos, capitulos o articulos de la ley 842 de 2003,
                                por la cual se modifica la reglamentación del ejercicio de la ingeniería, de
                                sus profesiones afines y de sus profesiones auxiliares, se adopta el Código de
                                Ética Profesional y se dictan otras disposiciones
                            </h4>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <LawPage />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default withData( Ley )
