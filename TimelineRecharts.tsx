import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const data = [
  {
    date: '13:00',
    name: "Lille Flandres",
    newStop: 2,
    stop: 1,
  },
  {
    date: '13:08',
    name: "Lille Europe",
    stop: 2,
    newStop: 2,
  },
  {
    date: '13:36',
    name: "Tourcoing",
    stop: 2,
    newStop: 2,
  },
  {
    date: '14:01',
    name: "Lille Douai",
    stop: 2,
    newStop: 1,
  },
  {
    date: '14:26',
    name: "Achiet",
    stop: 2,
    newStop: 2,
  },
  {
    date: '14:38',
    name: "Test",
    stop: 2,
    newStop: 2,
  },
  {
    date: '14:58',
    name: "Test2",
    stop: 2,
    newStop: 2,
  },
];

const TimelineRecharts = () => {

  return (
      <LineChart
        layout="vertical"
        width={500}
        height={500}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <XAxis type="number" hide={true} padding={{ left: 30, right: 100 }} />
        <YAxis yAxisId="left" dataKey="date" type="category" allowDuplicatedCategory={false} axisLine={false} tickLine={false} />
        <YAxis yAxisId="right" dataKey="name" type="category" orientation={'right'}  allowDuplicatedCategory={false} axisLine={false} tickLine={false}/>
        <Line yAxisId="left" type={"monotone"} dataKey="newStop" stroke="#8884d8" />
        <Line yAxisId="right" type={"monotone"} dataKey="stop" stroke="#82ca9d" />
        
      </LineChart>
  );
}

const CustomizedLabel = () => {
  return <span>Test</span>
}

export default TimelineRecharts
