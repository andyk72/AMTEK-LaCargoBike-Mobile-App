import React from 'react';

import PageTabTemplate from '../templates/PageTabTemplate';

const PageDelivery: React.FC = () => (
    <PageTabTemplate id="delivery" title="Consegna">
        <p>Page Delivery</p>
        <p>Btn Start/Stop</p>
        <p>Map</p>
        <p>Statistics (distance, time, speed?)</p>
    </PageTabTemplate>
);

export default PageDelivery;