import seeder from 'mongoose-seed';
import { dbURL } from './configs';

seeder.connect(dbURL, function () {
  seeder.loadModels(['./server/models/user.model.js']);

  seeder.clearModels(['User'], (err, done) => {
    if (err) return console.log('clear_err', err);
    if (done) return console.log('clear_success', done);
    seeder.disconnect();
  });
});
