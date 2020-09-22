import React from 'react';
import Map from '../../components/Map/Map';

import PageTabTemplate from '../templates/PageTabTemplate';

const PageDelivery: React.FC = () => (
    <PageTabTemplate id="delivery" title="Consegna">
        <Map />
    </PageTabTemplate>
);

export default PageDelivery;