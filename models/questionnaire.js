const mongoose = require('mongoose')
var questionnaireSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
    required: true
  },
  questions:
    [{
      questionMetaData:
      {
        answerType: { type: String, required: true },
        buttonType: String,
        dataType: String,
        validation: [{
          label: String,
          key: String,
          value: Number,
          _id: mongoose.Schema.Types.ObjectId
        }],
        options: [{ type: String }]
      },
      questionText: { type: String, required: true }
    }],
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const questionnaire = new mongoose.model('questionnaire', questionnaireSchema)
module.exports = questionnaire
