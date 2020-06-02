import React from 'react';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import dayjs from 'dayjs';
import { calculateBiorhythms } from '../calculations';
import BiorhythmChart from './BiorhytmChart';

function formatDate(isoString) {
  return dayjs(isoString).format('D MMM YYYY');
}

const BiorhythmCard = ({ birthDate, targetDate }) => {
  const { physical, emotional, intellectual } = calculateBiorhythms(
    birthDate,
    targetDate
  );
  return (
    <IonCard className="ion-text-center">
      <IonCardHeader>
        <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <BiorhythmChart />
        <p>Physical: {physical.toFixed(4)}</p>
        <p>Emotional: {emotional.toFixed(4)}</p>
        <p>Intellectual: {intellectual.toFixed(4)}</p>
      </IonCardContent>
    </IonCard>
  );
};

export default BiorhythmCard;
