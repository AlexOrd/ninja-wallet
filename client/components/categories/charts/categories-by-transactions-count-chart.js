import { Legend } from '@devexpress/dx-react-chart';
import { Tooltip, Typography } from '@material-ui/core';
import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Cell,
  Line,
  Label,
} from 'recharts';

const CategoriesByTransactionsCount = ({ categories, setActiveCategory }) => {
  return (
    <>
      <ResponsiveContainer height={200} width="100%">
        <BarChart data={categories} margin={{ top: 15, right: 40, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar onClick={(e) => setActiveCategory({ _id: e._id })} dataKey="transactionsCount">
            {categories.map((entry, index) => (
              <Cell key={index} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Typography variant="body2" align="center">
        Categories by transactions count
      </Typography>
    </>
  );
};

export default CategoriesByTransactionsCount;
