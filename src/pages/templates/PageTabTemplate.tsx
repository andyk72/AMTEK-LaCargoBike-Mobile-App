import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

import IPageTemplateProps from '../../interfaces/IPageTemplateProps';

import './PageTabTemplate.css';

const PageTabTemplate: React.FC<IPageTemplateProps> = (props: IPageTemplateProps) => {
  return (
    <IonPage className={ `cb-page cb-page-tab cb-page-${ props.id }` }>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{ props.title }</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{ props.title }</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="cb-page-content">
            { props.children }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PageTabTemplate;
