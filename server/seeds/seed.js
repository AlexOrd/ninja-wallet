import seeder from 'mongoose-seed';
import mongoose from 'mongoose';
require('dotenv').config();

const user1Id = new mongoose.Types.ObjectId();
const user2Id = new mongoose.Types.ObjectId();
const userPhotoId = new mongoose.Types.ObjectId();
const category1Id = new mongoose.Types.ObjectId();
const category2Id = new mongoose.Types.ObjectId();
const card1Id = new mongoose.Types.ObjectId();
const card2Id = new mongoose.Types.ObjectId();
const card3Id = new mongoose.Types.ObjectId();
const trans1Id = new mongoose.Types.ObjectId();
const trans2Id = new mongoose.Types.ObjectId();

seeder.connect(process.env.MONGODB_URI, () => {
  seeder.loadModels([
    './server/models/userPhoto.model',
    './server/models/user.model',
    './server/models/category.model.js',
    './server/models/card.model',
    './server/models/transaction.model',
  ]);
  seeder.clearModels(['userPhoto', 'User', 'Category', 'Card', 'Transaction'], function () {
    seeder.populateModels(
      [photoData, userData, categoriesData, cardData, transactionsData],
      (err, done) => {
        if (err) {
          return console.log('seed err', err);
        }
        if (done) {
          return console.log('seed done', done);
        }
        seeder.disconnect();
      }
    );
  });
});

const photoData = {
  model: 'userPhoto',
  documents: [
    {
      _id: userPhotoId,
      image:
        'data:image/png;base64,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',
    },
  ],
};

const categoriesData = {
  model: 'Category',
  documents: [
    {
      _id: category1Id,
      userId: user2Id,
      name: 'test category',
      description: 'it is category for a test',
      color: '#A0DCC0',
    },
    {
      _id: category2Id,
      userId: user2Id,
      name: 'test category2',
      description: '22it is category for a test',
      color: '#9979FF',
    },
  ],
};

const cardData = {
  model: 'Card',
  documents: [
    {
      _id: card1Id,
      userId: user1Id,
      cardNumber: '2512222',
      currency: 'dollar',
      cardName: 'first card',
      balance: '2222',
    },
    {
      _id: card2Id,
      userId: user2Id,
      cardNumber: '25222322',
      currency: 'dollar',
      cardName: 'second card',
      balance: '1500',
    },
    {
      _id: card3Id,
      userId: user2Id,
      cardNumber: '25223222',
      currency: 'dollar',
      cardName: 'second card',
      balance: '1500',
    },
  ],
};

const userData = {
  model: 'User',
  documents: [
    {
      _id: user1Id,
      firstName: 'Jack',
      lastName: 'Sparrow',
      email: 'test@test.com',
      isVerifiedEmail: true,
      auth: {
        password: 'testpassword',
        openedOnDevices: [
          {
            confirmCode: '12345678',
            deviceType: 'pc',
            lastLogin: new Date(),
          },
        ],
        codeForPasswordChanging: '234534',
        codeForEmailVerification: {
          value: '',
          emitted: null,
        },
      },
    },
    {
      _id: user2Id,
      firstName: 'Test',
      lastName: 'Test',
      email: 'sedd@test.com',
      isVerifiedEmail: false,
      avatarId: userPhotoId,
      auth: {
        password: 'simplepassword',
        openedOnDevices: [
          {
            confirmCode: '87654321',
            deviceType: 'mob',
            lastLogin: new Date(),
          },
        ],
        codeForPasswordChanging: '',
        codeForEmailVerification: {
          value: '567890',
          emitted: new Date(),
        },
      },
    },
  ],
};

const transactionsData = {
  model: 'Transaction',
  documents: [
    {
      _id: trans1Id,
      transactionName: 'First',
      transactionCategory: category2Id,
      userId: user2Id,
      cardId: card3Id,
      merchantName: 'Silpo',
      sum: 1000,
    },
    {
      _id: trans2Id,
      transactionName: 'Second',
      transactionCategory: category1Id,
      userId: user2Id,
      cardId: card2Id,
      merchantName: 'Zdorovie',
      sum: 2000,
    },
  ],
};
