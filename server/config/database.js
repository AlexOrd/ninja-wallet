require('dotenv').config();

import mongoose from 'mongoose';
export function connect() {
  // const URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.nkpko.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  const URL = 'mongodb://localhost:27017'
  mongoose.set('useCreateIndex', true);

  // Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
  // by default, you need to set it to false.
  mongoose.set('useFindAndModify', false);

  //Connection establishment
  mongoose.connect(URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    dbName: 'project_test' // !FOR DEV MODE
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
