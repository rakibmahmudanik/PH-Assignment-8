import React from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RatChart = ({ thisApp }) => {
  const revRatings = [...thisApp.ratings].reverse();
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={revRatings} layout="vertical">
        <XAxis
          axisLine={false}
          tickLine={false}
          width={80}
          tick={{ dy: 10 }}
          type="number"
          tickFormatter={(val) => {
            if (val >= 1000000) return val / 1000000 + "M";
            if (val >= 1000) return val / 1000 + "K";
            return val;
          }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          type="category"
          dataKey="name"
          width={70}
          tick={{ dx: -20 }}
        />
        <Tooltip
          formatter={(val) => {
            if (val >= 1000000) return val / 1000000 + "M";
            if (val >= 1000) return val / 1000 + "K";
            return val;
          }}
        />

        <Bar dataKey="count" fill="#FF8811" barSize={30} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RatChart;
