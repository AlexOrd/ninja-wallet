import React from 'react';
import Slider from 'react-slick';
import Cards from 'react-credit-cards';
import SliderArrow from '../SliderArrow/SliderArrow.jsx';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import 'react-credit-cards/lib/styles.scss';

const SliderWithCards = ({ cards, setCenteredCardId }) => {
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
      setCenteredCardId(cards[idx]._id);
    },
  };
  return (
    <div>
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card._id}>
            <Cards
              cvc={212}
              expiry={'0412'}
              name={'Balance: ' + card.balance + ' ' + card.currency}
              number={card.cardNumber}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderWithCards;
