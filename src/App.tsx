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
import { homeSharp, moonSharp, bookSharp } from "ionicons/icons";
import MainTab from "./pages/tab1/MainTab";
import CustomizeTab from "./pages/tab2/CustomizeTab";
import RecordTab from "./pages/tab3/RecordTab";
import RecordingPage from "./pages/tab3/RecordingPage";
import PlayerPage from "./pages/tab2/player";

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
import "./theme/variables.css";

import "./style.css";

import history from "./reactHistory";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter history={history}>
      <IonTabs>
        <IonRouterOutlet animated={false}>
          <Route path="/tab1" component={MainTab} exact={true} />
          <Route path="/tab1/:userId" component={MainTab}/>
          <Route path="/tab2" component={CustomizeTab} exact={true} />
          <Route path="/tab3" component={RecordTab} exact={true} />
          <Route path="/tab2/player" component={PlayerPage} />
          <Route path="/tab3/recording" component={RecordingPage} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab1" href="/tab1">
            <IonIcon icon={homeSharp} />
            <IonLabel>홈</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2">
            <IonIcon icon={moonSharp} />
            <IonLabel>수면맞춤</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3">
            <IonIcon icon={bookSharp} />
            <IonLabel>기록</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
