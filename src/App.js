import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';
import Biorhythm from './components/BiorhythmCard';

function App() {
  const [birthDate, setBirthDate] = useState('');
  const targetDate = new Date().toISOString();
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythm Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat="D MMM YYYY"
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        <Biorhythm targetDate={targetDate} />
      </IonContent>
    </IonApp>
  );
}

export default App;
