import React from 'react';
import { Redirect } from 'react-router-dom';
import { IonItem, IonInput, IonButton } from '@ionic/react';

import './Login.css';

const Login = (props: any) => {

    // DUMMY, MOCKS redux [TODO] -> remove when redux is implemented
    const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

    const [username, setUsername] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [formValid, setFormValid] = React.useState<boolean>(false);

    const usernameRef = React.useRef<HTMLIonInputElement>(null);
    const passwordRef = React.useRef<HTMLIonInputElement>(null);

    const handleInput = (evt: any) => {
        const id = evt.target.getAttribute('name');
        const value = evt.target.value;
        const setter = (id === 'username') ? setUsername : setPassword;
        setter(value);
        updateFormValid();
    };

    const updateFormValid = () => {
        setFormValid(formIsValid());
    };

    const formIsValid = () => {
        const usernameLength = (usernameRef.current!.value as string).length;
        const passwordLength = (passwordRef.current!.value as string).length;
        return usernameLength > 0 && passwordLength > 0;
    };

    const handleSubmit = (evt: any) => {
        console.log('handleSubmit()');
        //props.login({username,password});
        setLoggedIn(true);
    }

    //return props.user.isAuthenticated ? (
    return loggedIn ? (
        <Redirect to={props.redirect.authorized} />
    ) : (
        <div className="cb-login">
            <IonItem className="cb-login-item">
                <IonInput ref={ usernameRef } value={ username } id="cb-login-username" name="username" placeholder="Type username" onIonChange={handleInput} />
            </IonItem>
            <IonItem className="cb-login-item">
                <IonInput  ref={ passwordRef } value={ password } id="cb-login-password" name="password" placeholder="Type password" onIonChange={handleInput} />
            </IonItem>
            <IonButton color="primary" onClick={handleSubmit} disabled={ !formValid }>Login</IonButton>
        </div>
    );
};

export default Login;