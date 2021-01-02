import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Footer from "../../components/Footer";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Button from "../../components/Button";
import Card from "../../components/Card/Card";
import CardBody from "../../components/Card/CardBody";
import CardHeader from "../../components/Card/CardHeader";
import CardFooter from "../../components/Card/CardFooter";
import CustomInput from "../../components/CustomInput";
import MuiAlert, {AlertProps} from "@material-ui/lab/Alert";

import styles from "../../assets/jss/nextjs-material-kit/pages/loginPage";

// @ts-ignore
import image from "../../assets/img/bg7.jpg";
import Cookie from "js-cookie";
import { AUTH_SERVER, CLIENT_ID } from '../../utils/constants';
import { Snackbar } from "@material-ui/core";
import Router from "next/router";
import {LockOutlined} from "@material-ui/icons";

Cookie.set('student', {});

const useStyles = makeStyles(styles as any);

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function LoginPage(props: any) {
    const [cardAnimation, setCardAnimation] = React.useState("cardHidden");
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [open, setOpenAlert] = React.useState(false);
    const [message, setMessage] = React.useState('' );

    setTimeout(function() {
        setCardAnimation("");
    }, 700);

    const submitOnClick = async() => {
        if( email && password ) {
            try {
                const student = await fetch( `${AUTH_SERVER}/login`, {
                    method: 'POST',
                    body: JSON.stringify( { email, password } ),
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `client_id ${CLIENT_ID}`,
                        'Origin': 'https://planner.charlitoro.com'
                    },
                } ).then( res => {
                    if( res.status === 404 )
                        throw new Error('Incorrect Code or Password');
                    else if( res.status !== 200 )
                        throw new Error('Internal server error');
                    return res.json();
                } );
                Cookie.set("student", JSON.stringify( student ));
                await Router.replace("/admin/login", "/admin", { shallow: true });
                window.location.reload();
            } catch (e) {
                console.log( e.message );
                handleClickAlert(e.message);
            }
        } else {
            handleClickAlert( "Error: All field are required" );
        }
    }
    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => { setEmail(event.target.value) };
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => { setPassword(event.target.value) };
    const handleCloseAlert = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };
    const handleClickAlert = (message: string) => {
        setOpenAlert(true);
        setMessage(message)
    };

    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <div>
                <Header
                    absolute
                    color="transparent"
                    brand="NextJS Material Kit"
                    rightLinks={<HeaderLinks />}
                    {...rest}
                />
                <div
                    className={classes.pageHeader}
                    style={{
                        backgroundImage: "url(" + image + ")",
                        backgroundSize: "cover",
                        backgroundPosition: "top center"
                    }}
                >
                    <div className={classes.container}>
                        <GridContainer justify="center">
                            <GridItem xs={12} sm={6} md={4}>
                                <Card className={classes[cardAnimation]}>
                                    <form className={classes.form}>
                                        <CardHeader color="primary" className={classes.cardHeader}>
                                            <h4>Iniciar Sesión</h4>
                                        </CardHeader>
                                        <CardBody>
                                            <CustomInput
                                                labelText="Email"
                                                id="email"
                                                formControlProps={{fullWidth: true}}
                                                onChange={handleEmailChange}
                                                inputProps={{
                                                    type: "email",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <Email className={classes.inputIconsColor} />
                                                        </InputAdornment>
                                                    )
                                                }}
                                            />
                                            <CustomInput
                                                labelText="Password"
                                                id="pass"
                                                formControlProps={{fullWidth: true}}
                                                onChange={handlePasswordChange}
                                                inputProps={{
                                                    type: "password",
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <LockOutlined className={classes.inputIconsColor} />
                                                        </InputAdornment>
                                                    ),
                                                    autoComplete: "off"
                                                }}
                                            />
                                        </CardBody>
                                        <CardFooter className={classes.cardFooter}>
                                            <Button simple color="primary" size="lg" onClick={submitOnClick}>
                                                Ingresar
                                            </Button>
                                        </CardFooter>
                                    </form>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                    <Footer whiteFont />
                </div>
            </div>
            <Snackbar open={open} autoHideDuration={4000} onClose={handleCloseAlert}>
                <Alert onClose={handleCloseAlert} severity="error">
                    {message}
                </Alert>
            </Snackbar>
        </div>
    );
}
