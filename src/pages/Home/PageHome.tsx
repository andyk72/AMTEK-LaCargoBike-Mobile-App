import React from 'react';
import {
    IonPage,
    IonContent,
    IonHeader
} from '@ionic/react';

import PageTemplate from '../templates/PageTemplate';
import Login from '../../components/Login/Login';

import useIonicTabWithoutTabBar from '../../hooks/useIonicTabWithoutTabBar';

import './PageHome.css';

const PageHome: React.FC = () => {

    useIonicTabWithoutTabBar();

    return(
        <PageTemplate id="home" title="Home">
            <Login redirect={{authorized: '/dashboard', denied:'/accessDenied'}} />
        </PageTemplate>
    );
};

export default PageHome;