import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { home, bicycle, information } from "ionicons/icons";

import Routes from "./components/Navigation/Routes";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/cargobikes.css";

const Tabs: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Routes />
                </IonRouterOutlet>

                <IonTabBar slot="bottom">
                    <IonTabButton tab="dashboard" href="/dashboard">
                        <IonIcon className="cb-tab-button-icon" icon={home} />
                        <IonLabel className="cb-tab-button-label">
                            Dashboard
                        </IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="delivery" href="/delivery">
                        <IonIcon
                            className="cb-tab-button-icon"
                            icon={bicycle}
                        />
                        <IonLabel className="cb-tab-button-label">
                            Consegna
                        </IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="about" href="/about">
                        <IonIcon
                            className="cb-tab-button-icon"
                            icon={information}
                        />
                        <IonLabel className="cb-tab-button-label">
                            Infos
                        </IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default Tabs;
