const { required } = require('joi');
const mongoose = require('mongoose')
var UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: true
  },
  lastName: {
    type: String,
    trim: true,
    required: true
  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin','super_admin'],
    default: 'user'
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  isActive:{
    type:Boolean,
    default:1
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const users = new mongoose.model('users', UserSchema)
module.exports = users
