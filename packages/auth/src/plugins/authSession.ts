import { compareSync } from 'bcrypt';
import { Request, Response } from 'express';
import { get, isUndefined, omit } from 'lodash';
import {API_URL, IUserLogin, queryAuthSession} from '../utils/commons';
import fetch from 'node-fetch';

const getUser = async ( origin: string, userLogin: IUserLogin, clientId: string ) => {
    const response = await fetch( API_URL, {
        method: 'POST',
        headers: { 'Authorization': clientId, 'origin': origin },
        body: JSON.stringify( {
            query: queryAuthSession,
            variables:{ email: userLogin.email }
        } )
    } ).then( res => res.json() )
    if( get( response, 'errors' ) ){
        throw { statusCode: 404, message: 'User not found' };
    }
    return get( response, 'data.admin' );
}

export const authSession = async ( req: Request, res: Response ) => {
    const adminResponse: any = { statusCode: 502, message: 'Internal server error' };
    try {
        const clientId: string = get( req, 'headers.authorization' );
        const origin: string = get( req, 'headers.origin', '*' );
        if( isUndefined( clientId ) ) {
            adminResponse.statusCode = 400;
            adminResponse.message = 'Bad Request, not client id in headers';
            throw adminResponse;
        }
        const adminLogin: IUserLogin = get( req, 'body' );
        const admin = await getUser( origin, adminLogin, clientId );
        const isValid = compareSync( adminLogin.password, admin.password );
        if( isValid == false ){
            adminResponse.statusCode = 404;
            adminResponse.message = 'Incorrect password';
            throw adminResponse;
        }
        res.status(200).json( omit( admin, ['password'] ) );
    } catch (error) {
        console.log( error.message );
        res.status( error.statusCode ).send( error.message );
    }
}
