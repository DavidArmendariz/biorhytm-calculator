import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonInput,
  IonItem,
  IonLabel,
} from '@ionic/react';
import React, { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorythm Calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel>Name</IonLabel>
          <IonInput
            value={name}
            onIonChange={(event) => setName(event.detail.value)}
          />
        </IonItem>
        <p>Name: {name}</p>
      </IonContent>
    </IonApp>
  );
}

export default App;
