import seeder from 'mongoose-seed';
import { dbURL, data } from './configs';

seeder.connect(dbURL, function () {
  seeder.loadModels(['./server/models/user.model.js']);

  seeder.clearModels(['User'], (err, done) => {
    if (err) return console.log('clear_err', err);
    if (done) return console.log('clear_success', done);
  });

  seeder.populateModels(data, function (err, done) {
    if (err) return console.log('populate_err', err);
    if (done) return console.log('populate_success', done);

    seeder.disconnect();
  });
});
