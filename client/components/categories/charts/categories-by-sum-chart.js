import { Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Label } from 'recharts';

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius - 90) * cos;
  const sy = cy + (outerRadius - 90) * sin;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        {payload.name}
      </text>
      <Sector
        cx={sx}
        cy={sy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const CategoriesBySumChart = ({ categories, activeCategory, setActiveCategory }) => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null);

  useEffect(() => {
    activeCategory?._id &&
      setActiveCategoryIndex(
        categories.findIndex((category) => category._id === activeCategory._id)
      );
  }, [activeCategory?._id, categories, setActiveCategory]);
  return (
    <>
      <ResponsiveContainer height={200} width="100%">
        <PieChart margin={{ top: 10, bottom: 5 }}>
          <Pie
            isAnimationActive={true}
            activeIndex={activeCategoryIndex}
            data={categories}
            innerRadius="70%"
            outerRadius="100%"
            paddingAngle={5}
            dataKey="expensesSum"
            nameKey="name"
            labelLine={false}
            activeShape={renderActiveShape}
            onClick={(e) => setActiveCategory({ _id: e._id })}
          >
            {categories.map((entry, index) => (
              <Cell fill={entry.color} key={`cell-${index}`} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <Typography variant="body2" align="center">
        categories by sum spended
      </Typography>
    </>
  );
};

export default CategoriesBySumChart;
