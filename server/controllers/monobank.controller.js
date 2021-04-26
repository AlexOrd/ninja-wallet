import axios from 'axios';
import { Card } from '../models/card.model';
import { MonobankUserDataModel } from '../models/monobank.model';

const monobankApiBaseUrl = 'https://api.monobank.ua/personal';

export const getUserInfo = async (req, res) => {
  const monobankToken = req.headers['monobank-token'];

  try {
    const monobankApiRes = await axios.get(`${monobankApiBaseUrl}/client-info`, {
      headers: {
        'X-Token': monobankToken,
      }
    });

    res.status(HttpStatus.CREATED).json({
      success: true,
      data: { monobankInfo: monobankApiRes.data },
    });
  } catch (err) {
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
};

export const addMonobankAccountToUser = async (req, res) => {

  // if (await doesUserAlreadyAddedThisAccount(req.body.monobankAccountId, req.userID)) {
  //     res.status(HttpStatus.NOT_ACCEPTABLE).json({
  //       success: false,
  //       msg: 'You already added this card',
  //     });
  //   }

  try {
    const newCard = new Card({
      userId: req.userID,
      cardNumber: req.body.monobankCardNum, 
      currency: 'uah',
      cardName: 'monobank',
    });

    const createdNewCard = await newCard.save();

    const monobankUserData = new MonobankUserDataModel({
      monobankToken: req.headers['monobank-token'],
      monobankAccountId: req.body.monobankAccountId,
      userId: req.userID,
      card: createdNewCard._id,
    });

    const createdMonobankUserData = await monobankUserData.save();

    res.status(HttpStatus.CREATED).json({
      success: true,
      data: { monobankUserData: createdMonobankUserData },
    });
  } catch (err) {
    console.log(err);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
    });
  }
};

const doesUserAlreadyAddedThisAccount = async (accoutId, userId) => {
  const user = await User.findOne({ _id: userId });

  if (user.monobankUserData.includes(accoutId)) {
    return true;
  }

  return false;
};