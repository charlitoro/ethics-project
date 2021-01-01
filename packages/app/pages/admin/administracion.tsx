import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import HeaderAdminLinks from "../../components/Header/HeaderAdminLinks";
import Parallax from "../../components/Parallax";

import styles from "../../assets/jss/nextjs-material-kit/pages/landingPage";

const dashboardRoutes: Array<any> = [];
const useStyles = makeStyles(styles as any);
const image = 'https://pixabay.com/get/52e9d74a4d53ad14f6d1867dda3536781536dde35b55764f_1920.jpg'

export default ( props: any ) => {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                color="transparent"
                routes={dashboardRoutes}
                brand="Admin"
                rightLinks={<HeaderAdminLinks />}
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
                            <h1 className={classes.title}>Administración de la Ley 842</h1>
                            <h3>
                                En esta sección se administra todos los titulos, capitlos y articulos de
                                la ley 842 del 2003. Entre las opciones permitidas estan la creacion,
                                edicion y eliminacion de titulos, capilutos y articulos.
                            </h3>
                            <br />
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div className={classNames(classes.main, classes.mainRaised)}>
                <div className={classes.container}>
                    {/*TODO: listar la ley aqui*/}
                </div>
            </div>
            <Footer />
        </div>
    );
}
