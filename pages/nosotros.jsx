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
import TeamSection from "../pages-sections/LandingPage-Sections/TeamSection";

const image = 'https://pixabay.com/get/57e2dd434f51a414f6d1867dda3536781536dde35350734b_1920.jpg'
const dashboardRoutes = [];
const useStyles = makeStyles(styles);

export default ( props ) =>  {
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
            <Parallax filter responsive image={image}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={6}>
                            <h1 className={classes.title}>Acerca de Nosotros</h1>
                            <h4>
                                Nuestro quipo de trabajo lo integran estudiantes de ultimo semestre del programa
                                de Ingenieria de Sistemas de la Universidad de Nariño.
                            </h4>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    <TeamSection />
                </div>
            </div>
            <Footer />
        </div>
    );
}
