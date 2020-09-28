import React from 'react';
import {
    IonPage,
    IonContent,
    IonHeader
} from '@ionic/react';

import PageTemplate from '../templates/PageTemplate';
import Logo from '../../components/Logo/Logo';
import Login from '../../components/Login/Login';

import useIonicTabWithoutTabBar from '../../hooks/useIonicTabWithoutTabBar';

import './PageHome.css';

const PageHome: React.FC = () => {

    useIonicTabWithoutTabBar();

    return(
        <PageTemplate id="home" title="Home">
            <Logo />
            <Login redirect={{authorized: '/dashboard', denied:'/accessDenied'}} />
        </PageTemplate>
    );
};

export default PageHome;