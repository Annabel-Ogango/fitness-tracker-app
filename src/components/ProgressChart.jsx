import React from "react";
import { Chart, Filler } from 'chart.js';
Chart.register(Filler);
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", weight: 120 },
  { day: "Tue", weight: 150 },
  { day: "Wed", weight: 130 },
  { day: "Thu", weight: 160 },
  { day: "Fri", weight: 180 },
];

export default function ProgressChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="weight"
          stroke="#6BCB77"
          strokeWidth={3}
          dot={{ r: 5, fill: "#FF6B6B" }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
