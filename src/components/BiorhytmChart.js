import React from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  ReferenceLine,
  CartesianGrid,
} from 'recharts';
import { calculateBiorhythmsSeries } from '../calculations';
import dayjs from 'dayjs';
import './BiorhythmChart.css';

function formatDate(isoString) {
  return dayjs(isoString).format('D MMM');
}

const BiorhythmChart = ({ birthDate, targetDate }) => {
  const startDate = dayjs(targetDate).subtract(15, 'days').toISOString();
  const data = calculateBiorhythmsSeries(
    birthDate,
    startDate,
    31
  ).map((item) => ({ ...item, date: formatDate(item.date) }));
  return (
    <ResponsiveContainer className="biorhythm-chart" width="100%" height={200}>
      <LineChart data={data}>
        <XAxis
          dataKey="date"
          ticks={[data[3].date, data[15].date, data[27].date]}
        />
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <ReferenceLine x={data[15].date} />
        <Line
          dot={false}
          type="natural"
          dataKey="physical"
          className="physical"
          stroke="green"
        />
        <Line
          dot={false}
          type="natural"
          dataKey="emotional"
          className="emotional"
        />
        <Line
          dot={false}
          type="natural"
          dataKey="intellectual"
          className="intellectual"
          stroke="blue"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BiorhythmChart;
