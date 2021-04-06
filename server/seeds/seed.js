import dotenv from 'dotenv';
dotenv.config();
import seeder from 'mongoose-seed';

const dbURI = process.env.MONGODB_URI;

import {categoriesSeedData} from './categories.seed';  

seeder.connect(dbURI, {useUnifiedTopology: true} ,function () {
  seeder.loadModels(([
    // path there your models
    './server/models/category.model.js'
  ]));
  seeder.clearModels([
    // path there your models name
    'Category'
  ], () => console.log('cleared'));
  seeder.populateModels([
    // path there you objects with data
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