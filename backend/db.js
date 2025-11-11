const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/tpdb';

const connectDB = async (retries = 5) => {
  for (let i = 0; i < retries; i++) {
    try {
      await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('✅ MongoDB connected');
      return;
    } catch (err) {
      console.error(`❌ MongoDB connection error, retrying (${i+1}/${retries})`, err.message);
      await new Promise(res => setTimeout(res, 5000));
    }
  }
  console.error('❌ Could not connect to MongoDB, exiting');
  process.exit(1);
};

module.exports = connectDB;

