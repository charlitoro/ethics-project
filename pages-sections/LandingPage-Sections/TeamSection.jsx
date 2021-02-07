import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Button from "../../components/Button";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardFooter from "../../components/Card/CardFooter";

import styles from "../../assets/jss/nextjs-material-kit/pages/landingPageSections/teamStyle";

import erika from "../../assets/img/faces/erika-profile.png";
import kandel from "../../assets/img/faces/kandel-profile.png";
import charli from "../../assets/img/faces/charli-profile.png";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Equipo de Trabajo</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={erika} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Erika Orbes
                <br />
                <small className={classes.smallTitle}>Analisis</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Estudiante de 10 semestre de Ingenieria de Sistemas de la Universidad de Nariño y
                  analista en el equipo de desarrollo.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  href="https://www.instagram.com/erikaorbes/"
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={kandel} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Kandel Yandar
                <br />
                <small className={classes.smallTitle}>Arquitectura</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Estudiante de 10 semestre de Ingenieria de Sistemas de la Universidad de Nariño y
                  arquitecta en el equipo de desarrollo.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  href="https://www.instagram.com/kandel_yandar/"
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={charli} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Carlos Toro
                <br />
                <small className={classes.smallTitle}>Desarrollo</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Estudiante de 10 semestre de Ingenieria de Sistemas de la Universidad de Nariño y
                  desarrolador full stack en el equipo de desarrollo.
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}>
                <Button
                  justIcon
                  href="https://twitter.com/charlitoro_"
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  href="https://www.instagram.com/charlitoro_/"
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  href="https://www.linkedin.com/in/charlitoro/"
                  color="transparent"
                  className={classes.margin5}
                >
                  <i className={classes.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
