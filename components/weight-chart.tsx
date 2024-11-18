"use client";

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Jan 1", weight: 75 },
  { date: "Jan 8", weight: 74.5 },
  { date: "Jan 15", weight: 74 },
  { date: "Jan 22", weight: 73.2 },
  { date: "Jan 29", weight: 72.8 },
  { date: "Feb 5", weight: 72.3 },
  { date: "Feb 12", weight: 71.9 },
];

export function WeightChart() {
  return (
    <div className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin - 1", "dataMax + 1"]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="weight"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}