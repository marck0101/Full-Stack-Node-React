// Chart.jsx
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Chart = ({ invoices }) => {
  return (
    <ResponsiveContainer width="95%" height={300}>
      <BarChart data={invoices}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="invoiceNumber" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="amount" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Chart;
