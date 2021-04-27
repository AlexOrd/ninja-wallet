import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

export function connect() {
    const URL = process.env.MONGODB_URI;
    const local = process.env.LOCALE_DB_URL
    mongoose.set('useCreateIndex', true);

    // Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
    // by default, you need to set it to false.
    mongoose.set('useFindAndModify', false);

    // Connection establishment
    mongoose.connect(local, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        dbName: 'projectTest'
    });


    const db = mongoose.connection;

    db.on('error', (err) => {
        console.error('Error occured in db connection:', err);
    });

    db.on('open', () => {
        console.log('DB Connection established successfully');
    });

    db.on('disconnected', () => {
        console.log('DB Connection closed');
    });
}
