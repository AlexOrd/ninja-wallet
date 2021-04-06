var seeder = require('mongoose-seed');
const db = 'mongodb+srv://ninja:M0CsLZBLqPOnXGnE@ninja-wallet.nkpko.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

seeder.connect(db, { useUnifiedTopology: true }, function () {
  seeder.loadModels(['./server/models/transaction.model.js']);

  seeder.clearModels(['Transaction'], (err, done) => {
    if (err) {
      return console.log('clearModels err', err);
    }

    if (done) {
      return console.log('clearModels done', done);
    }
  });

  seeder.populateModels(data, function (err, done) {
    if (err) {
      return console.log('populateModels err', err);
    }

    if (done) {
      return console.log('populateModels done', done);
    }

    seeder.disconnect();
  });
});
var data = [
  {
    model: 'Transaction',
    documents: [
      {
        _id: 92082309483290821,
        transactionName: 'First',
        transactionCategory: 'Products',
        userId: '36336498',
        accountId: '48793473',
        merchantName: 'Silpo',
      },
      {
        _id: 72082309483290821,
        transactionName: 'Second',
        transactionCategory: 'Medic',
        userId: '36336498',
        accountId: '48793473',
        merchantName: 'Zdorovie',
      }
    ]
  }
];
