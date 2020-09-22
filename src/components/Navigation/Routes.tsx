import React from 'react';

import { Route } from 'react-router-dom';

import PageHome from '../../pages/Home/PageHome';
import PageDashboard from '../../pages/Dashboard/PageDashboard';
import PageDelivery from '../../pages/Delivery/PageDelivery';
import PageAbout from '../../pages/About/PageAbout';

const Routes = () => {
    return (
        <React.Fragment>
            <Route path="/" component={ PageHome } exact />
            <Route path="/:tab(dashboard)" component={ PageDashboard } />
            <Route path="/:tab(delivery)" component={ PageDelivery } exact={true} />
            <Route path="/:tab(about)" component={ PageAbout } />
        </React.Fragment>
    );
}

export default Routes;