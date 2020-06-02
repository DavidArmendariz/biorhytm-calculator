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
import { useLocalStorage } from './hooks';

function App() {
  const [birthDate, setBirthDate] = useLocalStorage('birthdate', '');
  const [targetDate, setTargetDate] = useState(new Date().toISOString());
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythm Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="fixed">Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat="D MMM YYYY"
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="fixed">Target Date:</IonLabel>
          <IonDatetime
            displayFormat="D MMM YYYY"
            value={targetDate}
            onIonChange={(event) => setTargetDate(event.detail.value)}
          />
        </IonItem>
        {birthDate && (
          <Biorhythm birthDate={birthDate} targetDate={targetDate} />
        )}
      </IonContent>
    </IonApp>
  );
}

export default App;
