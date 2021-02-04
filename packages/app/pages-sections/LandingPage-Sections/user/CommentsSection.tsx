import React, { useState } from 'react'
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../../assets/jss/nextjs-material-kit/pages/landingPageSections/commentsStyles";
import {TextField, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography} from '@material-ui/core';
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import parse from 'html-react-parser'
import {executeQuery} from "../../../plugins/graphqlQueryRequest";
import {commentsQuery} from "../../../utils/queries";
import { AccountCircle } from '@material-ui/icons';
import { map, orderBy } from 'lodash';
import moment from 'moment';


const useStyles = makeStyles(styles as any);

interface IComment{
    id: string;
    content: string;
    createdAt: string;
}

const findComments = (): Array<IComment> | undefined => {
    const { data } = executeQuery( commentsQuery )
    if( data && data.comments ) {
        return  orderBy( data.comments, ( { createdAt }: IComment ) => {
            return moment(createdAt); }, ['desc']
        );
    }
}

export default function CommentsSection (){
    const classes = useStyles();
    const [comments, setComments] = useState<Array<IComment> | undefined>( findComments() )

    return(
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={10}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Deja tu comentario"
                        fullWidth
                        multiline
                        rows={4}
                        variant="outlined"
                    />
                </GridItem>
            </GridContainer>
            <div>
                <List>
                    {
                        map( comments, ( {id, content, createdAt}: IComment ) => {
                            return (
                                <ListItem key={id} alignItems="flex-start">
                                    <ListItemAvatar>
                                        <Avatar alt="Remy Sharp"> <AccountCircle/> </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <React.Fragment>
                                                <Typography component="span" variant="subtitle2" color="textSecondary">
                                                    { moment( createdAt ).locale('es').fromNow() }
                                                </Typography>
                                            </React.Fragment>
                                        }
                                        secondary={
                                            <React.Fragment>
                                                <Typography component="span" variant="body1" className={classes.inline} color="textPrimary">
                                                    { parse(content) }
                                                </Typography>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            )
                        } )
                    }
                </List>
            </div>
        </div>
    )
}
