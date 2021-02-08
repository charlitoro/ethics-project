import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../../assets/jss/nextjs-material-kit/pages/landingPageSections/user/landingPageStyles";
import GridItem from "../../../components/Grid/GridItem";
import GridContainer from "../../../components/Grid/GridContainer";
import ReactPlayer from 'react-player'
import {Card, CardActionArea, CardMedia, CardContent, CardActions, Button, Typography} from "@material-ui/core";
import {newsQuery} from "../../../utils/queries";
import {executeQuery} from "../../../plugins/graphqlQueryRequest";
import {map, orderBy, get} from "lodash";
import moment from "moment";

const useStyles = makeStyles(styles);

export default function LandingPage() {
    const classes = useStyles()

    const { data, loading } = executeQuery( newsQuery )

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
                <h2 className={classes.title}>Noticias</h2>
                <GridContainer justify="center">
                    {( () => {
                        if( !loading && get( data, `posts` ) ) {
                            const news = orderBy( data.posts, ( { createdAt } ) => {
                                return moment(createdAt); }, ['desc']
                            );
                            return map( news, ({ id, url, image, title, content } ) => {
                                return <GridItem key={id} xs={4}>
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
                    } ) ()}
                </GridContainer>
            </div>
        </div>
    )
}
