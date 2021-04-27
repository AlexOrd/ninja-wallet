import React from 'react';
import Slider from 'react-slick';
import { Grid, Hidden } from '@material-ui/core';
import CategoriesByTransactionsCount from './categories-by-transactions-count-chart';
import CategoriesBySumChart from './categories-by-sum-chart';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Charts = ({ activeCategory, setActiveCategory, categoriesData }) => {
  const ChartsData = [
    <CategoriesBySumChart
      activeCategory={activeCategory}
      setActiveCategory={setActiveCategory}
      categories={categoriesData}
    />,

    <CategoriesByTransactionsCount
      setActiveCategory={setActiveCategory}
      categories={categoriesData}
    />,
  ];

  return (
    <>
      <Hidden xsDown>
        <Grid container item direction="row" xs={12} md={12}>
          {ChartsData.map((chart, index) => (
            <Grid key={index} item xs={6} md={6}>
              {chart}
            </Grid>
          ))}
        </Grid>
      </Hidden>

      <Hidden smUp>
        <Grid container item direction="row" xs={12} md={12}>
          <Grid item xs={12}>
            <Slider {...settings}>
              {ChartsData.map((chart, index) => (
                <div key={index}>{chart}</div>
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Hidden>
    </>
  );
};

export default Charts;
