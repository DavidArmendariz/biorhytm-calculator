import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';

const BiorhythmCard = ({ targetDate }) => {
  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{targetDate}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>Physical: 83%</p>
        <p>Physical: 34%</p>
        <p>Physical: 52%</p>
      </IonCardContent>
    </IonCard>
  );
};

export default BiorhythmCard;
