import React, { useState } from 'react'
import {makeStyles} from "@material-ui/core/styles";
import styles from "../../../assets/jss/nextjs-material-kit/pages/landingPageSections/commentsStyles";
import {TextField, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography} from '@material-ui/core';
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import {executeQuery} from "../../../plugins/graphqlQueryRequest";
import {commentsQuery, createCommentMutation} from "../../../utils/queries";
import {AccountCircle, AddComment} from '@material-ui/icons';
import { map, orderBy, isEmpty } from 'lodash';
import moment from 'moment';
import Button from "../../../components/Button";
import {API_URL, CLIENT_ID} from "../../../utils/constants";
import {gql} from "apollo-boost";
import fetch from 'node-fetch';

const useStyles = makeStyles(styles);

const findComments = () => {
    const { data } = executeQuery( gql(commentsQuery) )
    if( data && data.comments ) {
        return  orderBy( data.comments, ( { createdAt } ) => {
            return moment(createdAt); }, ['desc']
        );
    }
}

export default function CommentsSection (){
    const classes = useStyles();
    const [comments, setComments] = useState( findComments() )
    const [commentText, setCommentText] = useState( '' )

    const handlerCommentText = ( event ) => {
        setCommentText( event.target.value )
    }

    const handlerPostComment = async () => {
        if( !isEmpty(commentText) ){
            try {
                const response = await fetch( `${API_URL}`, {
                    method: 'POST',
                    body: JSON.stringify({
                        query: createCommentMutation,
                        variables:{ comment: commentText }
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `client_id ${CLIENT_ID}`
                    }
                } ).then( (res) => res.json() )
                console.log(response)
                const { data } = await fetch( `${API_URL}`, {
                    method: 'POST',
                    body: JSON.stringify({ query: commentsQuery }),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `client_id ${CLIENT_ID}`
                    }
                } ).then( (res) => res.json() )
                setCommentText( '' )
                setComments(  orderBy( data.comments, ( { createdAt } ) => {
                    return moment(createdAt); }, ['desc']
                ) )
            } catch (error){
                console.error( 'Error: ', error.message )
            }
        }
    }

    return(
        <div className={classes.section}>
            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={10}>
                    <TextField
                        id="outlined-multiline-static"
                        label="Deja tu comentario"
                        fullWidth
                        multiline
                        onChange={handlerCommentText}
                        rows={4}
                        variant="outlined"
                    />
                    <Button color="rose" size="sm" onClick={handlerPostComment} >
                        <AddComment className="fas fa-play" /> Comentar
                    </Button>
                </GridItem>
            </GridContainer>
            <div>
                <List>
                    {
                        map( comments, ( {id, content, createdAt} ) => {
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
                                                    { content }
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
