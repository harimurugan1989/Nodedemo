const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   institute: {
//     type: String,
//     required: true,
//   },
//   type: {
//     type: String,
//     enum: [
//       "student",
//       "faculty",
//     ],
//     required: true
//   },
// }, { timestamps: true });
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