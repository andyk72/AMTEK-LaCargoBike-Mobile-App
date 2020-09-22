import React from 'react';
import { IonContent, IonPage } from '@ionic/react';

import IPageTemplateProps from '../../interfaces/IPageTemplateProps';

import './PageTemplate.css';

const PageTemplate: React.FC<IPageTemplateProps> = (props: IPageTemplateProps) => {
  return (
    <IonPage className={ `cb-page cb-page-${ props.id }` }>
        <IonContent className="ion-padding">
            <div className="cb-page-content">
                { props.children }
            </div>
        </IonContent>
    </IonPage>
  );
};

export default PageTemplate;
