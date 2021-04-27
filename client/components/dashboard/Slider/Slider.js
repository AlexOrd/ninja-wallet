import React from 'react';
import Slider from 'react-slick';
import Cards from 'react-credit-cards';
import { Skeleton } from '@material-ui/lab';

import SliderArrow from '../SliderArrow/SliderArrow.js';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import 'react-credit-cards/lib/styles.scss';
import { Button, makeStyles, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  alertMsg: {
    color: '#721c24',
    fontSize: 18,
    lineHeight: 2.3,
  },
  skeletonBlock: {
    display: 'flex',
    marginLeft: 45,
  },
  infoBlock: {
    marginLeft: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const SliderWithCards = ({ cards, setCenteredCardIdx }) => {
  const classes = useStyles();
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    adaptiveHeight: true,
    variableWidth: true,
    nextArrow: <SliderArrow next />,
    prevArrow: <SliderArrow />,
    afterChange: (idx) => {
      setCenteredCardIdx(idx);
    },
  };

  return (
    <div>
      <Slider {...settings}>
        {cards &&
          cards.length > 0 &&
          cards.map((card) => (
            <div key={card._id}>
              <Cards
                cvc={212}
                expiry={'0412'}
                name={'Balance: ' + card.balance + ' ' + card.currency}
                number={card.cardNumber}
              />
            </div>
          ))}

        {!cards &&
          Array(5)
            .fill(0)
            .map((_, idx) => (
              <Skeleton key={idx}>
                <Cards cvc={idx} expiry={idx} name={''} number={idx} />
              </Skeleton>
            ))}
      </Slider>

      {cards && !cards.length && (
        <div className={classes.skeletonBlock}>
          <div>
            <Skeleton variant="text" />
            <Skeleton variant="circle" width={40} height={40} />
            <Skeleton variant="rect" width={300} height={175} />
          </div>
          <div className={classes.infoBlock}>
            <Typography classes={{ root: classes.alertMsg }}>
              You do not have any cards yet
            </Typography>
            <Link to="/cards">
              <Button variant="contained" color="primary">
                Create one
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderWithCards;
