import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../../assets/jss/nextjs-material-kit/pages/landingPageSections/user/landingPageStyles";
import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import ReactPlayer from 'react-player'
import {Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Typography} from "@material-ui/core";

const useStyles = makeStyles(styles);

const copniaNews = [
    {
        key: 1,
        url: "https://www.copnia.gov.co/noticias/certificado-de-vigencia-y-antecedentes-disciplinarios",
        image: "https://www.copnia.gov.co/sites/default/files/styles/slider_home_lg/public/node/article/field_image/Banner%20certificados-01_0.jpg?itok=VEksXYFv",
        title: "CERTIFICADO DE VIGENCIA Y ANTECEDENTES",
        content: "El Consejo Profesional Nacional de Ingeniería - COPNIA, es la entidad pública del orden nacional, encargada de la función administrativa de control y vigilancia del ejercicio de la ingeniería, de sus profesiones afines..."
    },
    {
        key: 2,
        url: "https://www.copnia.gov.co/noticias/resultado-pruebas-convocatoria-interna-planta-temporal",
        image: "https://www.copnia.gov.co/sites/default/files/styles/slider_home_lg/public/node/article/field_image/Banner%20resultado-01.jpg?itok=IhPhZU-C",
        title: "Resultado pruebas, convocatoria interna planta temporal",
        content: "El Consejo Profesional Nacional de Ingeniería -COPNIA, se permite publicar los resultados de las pruebas de los aspirantes a la convocatoria interna, planta temporal 2021..."
    },
    {
        key: 2,
        url: "https://www.copnia.gov.co/noticias/participe-en-la-construccion-del-plan-anticorrupcion-2021",
        image: "https://www.copnia.gov.co/sites/default/files/styles/slider_home_lg/public/node/article/field_image/Banner%20PAAC-01.jpg?itok=QSoR2Y5a",
        title: "Participe en la construcción del Plan Anticorrupción 2021",
        content: "La Subdirección de Planeación, Control y Seguimiento del Consejo Profesional Nacional de Ingeniería, pone a consideración de la ciudadanía el proyecto del “Plan Anticorrupción y de Atención al Ciudadano 2021” así..."
    },
]

export default function LandingPage() {
    const classes = useStyles()
    return (
        <div className={classes.section}>
            <div>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h1 className={classes.title}>Ley 842 de 2003</h1>
                        <h3 className={classes.description}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                            irure dolor in reprehenderit in voluptate velit esse cillum
                            dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum.
                        </h3>
                    </GridItem>
                </GridContainer>
            </div>
            <br />
            <div>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={7}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=Pkp-quY98TI' />
                    </GridItem>
                </GridContainer>
            </div>
            <div className={classes.section}>
                <h1 className={classes.title}>Noticias de COPNIA</h1>
                <GridContainer justify="center">
                    {
                        copniaNews.map( ({ key, url, image, title, content } ) => {
                            return <GridItem key={key} xs={4}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            alt={title}
                                            height="140"
                                            image={image}
                                            title={title}
                                        />
                                        <CardContent>
                                            <Typography align="left" gutterBottom variant="subtitle2" >{title}</Typography>
                                            <Typography align="left" variant="body2" color="textSecondary" component="p">{content}</Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button target="_blank" href={url} size="small" color="primary"> Leer más </Button>
                                    </CardActions>
                                </Card>
                            </GridItem>
                        })
                    }
                </GridContainer>
            </div>
        </div>
    )
}
