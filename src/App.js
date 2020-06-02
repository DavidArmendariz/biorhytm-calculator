import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorythm Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Name:</IonLabel>
          <IonInput
            value={name}
            onIonChange={(event) => setName(event.detail.value)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Date of Birth:</IonLabel>
          <IonDatetime
            displayFormat="D MMM YYYY"
            value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)}
          />
        </IonItem>
        <p>Name: {name}</p>
        <p>Date of Birth: {birthDate}</p>
      </IonContent>
    </IonApp>
  );
}

export default App;
