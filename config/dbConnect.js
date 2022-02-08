const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MongoURI');

const dbConnect = async () => {
  try {
    await mongoose.connect(db);
    console.log('MongoDB is connected!');
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnect;
