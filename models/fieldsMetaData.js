const mongoose = require('mongoose')
const fieldsMetaDataSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['string', 'number', 'mcq', 'description', 'answerType'],
    required: true
  },
  validation: [{
    label: { type: String, required: true },
    key: { type: String, required: true },
    dataType: { type: String },
    buttonType: { type: String }
  }],
  minOptionsCount:
  {
    type: Number,
    min: 2
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
  // validation: {
  //   required: { type: Boolean, default: false },
  //   minLength: Number,
  //   maxLength: Number,
  //   decimal: { type: Boolean, default: false }, // For decimal validation
  //   negative: { type: Boolean, default: false }, // For negative number validation
  //   phoneLength: { type: Boolean, default: false } // For phone number length validation
  // },
  // options: [{ type: String }], // For storing options for MCQ type
  // mcqType: {
  //   type: String,
  //   enum: ['radio', 'checkbox'],
  //   default: 'radio'
  // }
});

const fieldsMetaData = new mongoose.model('fields_meta_data', fieldsMetaDataSchema)
module.exports = fieldsMetaData
