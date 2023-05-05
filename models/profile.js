const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  snippet: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true
  },
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);
module.exports = Profile;