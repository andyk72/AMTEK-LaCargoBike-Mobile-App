import React from 'react';
import {
    IonList,
    IonItem,
    IonLabel
} from '@ionic/react';

const Navigation: React.FC = () => (
    <IonList>
        <IonItem routerLink="/">
            <IonLabel>Home</IonLabel>
        </IonItem>
        <IonItem routerLink="/dummy">
            <IonLabel>Dummy</IonLabel>
        </IonItem>
        <IonItem routerLink="/tabs">
            <IonLabel>Tabs</IonLabel>
        </IonItem>
    </IonList>
);

export default Navigation;
