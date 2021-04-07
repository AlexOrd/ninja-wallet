import dotenv from 'dotenv';
dotenv.config();
import seeder from 'mongoose-seed';

const dbURI = process.env.MONGODB_URI;

import {categoriesSeedData} from './categories.seed';  
import {transactionsSeedData} from './transactions.seed';

seeder.connect(dbURI, {useUnifiedTopology: true} ,function () {
  seeder.loadModels(([
    // path there your models
    './server/models/transaction.model.js',
    './server/models/category.model.js'
  ]));
  seeder.clearModels([
    // path there your models name
    'Category',
    'Transaction'
  ], () => console.log('cleared'));
  seeder.populateModels([
    // path there you objects with data
    transactionsSeedData,
    categoriesSeedData
  ], (err, done) => {
    if (err) {
      return console.log('seeder error', err);
    }

    if (done) {
      return console.log('seeder done', done);
    }

    seeder.disconnect();
  });
});