import seeder from 'mongoose-seed'
import dotenv from 'dotenv'
dotenv.config()

import { CardData } from './CardData'

seeder.connect(process.env.MONGO_URL, 
    { 
        useUnifiedTopology: true, 
        useNewUrlParser: true 
    }, () => {
    seeder.loadModels(['./server/models/card.model.js'])

    seeder.clearModels(['Card'], () => console.log('card'))

    seeder.populateModels(CardData, (err, done) => {
        if(err) return console.log('seed error', err)

        if(done) return console.log('seed done', done)

        seeder.disconnect()
    })
})

