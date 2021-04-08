import seeder from 'mongoose-seed';
import process from 'process'
export const data = [
    {
        'model': 'User',
        'documents': [
            {
                firstName: 'Jack',
                lastName: 'Sparrow',
                email: 'test@test.com',
                isVerifiedEmail: true,
                auth: {
                    password: 'testpassword',
                    openedOnDevices: [{
                        confirmCode: '12345678',
                        deviceType: 'pc',
                        lastLogin: new Date()
                    }],
                    codeForPasswordChanging: '234534',
                    codeForEmailVerification: {
                        value: '',
                        emitted: null
                    },

                }
            },
            {
                firstName: 'Test',
                lastName: 'Test',
                email: 'sedd@test.com',
                isVerifiedEmail: false,
                auth: {
                    password: 'simplepassword',
                    openedOnDevices: [{
                        confirmCode: '87654321',
                        deviceType: 'mob',
                        lastLogin: new Date()
                    }],
                    codeForPasswordChanging: '',
                    codeForEmailVerification: {
                        value: '567890',
                        emitted: new Date()
                    },
                }
            },
            {
                firstName: 'Test3',
                lastName: 'Test3',
                email: 'seddasdasda@test.com',
                isVerifiedEmail: false,
                auth: {
                    password: 'simplasdasdasepassword',
                    openedOnDevices: [{
                        confirmCode: '874431',
                        deviceType: 'pc',
                        lastLogin: new Date()
                    }],
                    codeForPasswordChanging: '',
                    codeForEmailVerification: {
                        value: '597860',
                        emitted: new Date()
                    },
                }
            }
            
        
            
        ]
    }
]

export const dbURL = process.env.DBURL || 'mongodb://localhost:27017/seed'

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
