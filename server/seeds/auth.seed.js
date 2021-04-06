const seeder = require('mongoose-seed')
const data = [
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
            }
            
        
            
        ]
    }
]

const db = 'mongodb://localhost:27017/seed'

seeder.connect(db, function() {
    seeder.loadModels([
        '../models/user.model.js',
    ])

    seeder.clearModels(['User'], (err, done) => {
        if(err) {
            return console.log('clearModels err', err)
        }

        if(done) {
            return console.log('clearModels done', done)
        }
    })

    seeder.populateModels(data, function(err, done) {
        if(err) {
            return console.log('populateModels err', err)
        }

        if(done) {
            return console.log('populateModels done', done)
        }

        seeder.disconnect()
    })
})