const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  googleId: { type: String, unique: true, required: true },
  name: { type: String },
  email: { type: String, unique: true, required: true },
  authProvider: { type: String },
  authId: { type: String, unique: true, required: true }
});

module.exports = mongoose.model('User', storeSchema, 'username');
