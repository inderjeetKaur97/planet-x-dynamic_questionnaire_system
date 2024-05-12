const mongoose = require('mongoose')
var usersQuestionnaireDataSchema = new mongoose.Schema({
  questionnaireId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'questionnaire'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  questionnaireData: { type: String, required: true },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const usersQuestionnaireData = new mongoose.model('users_questionnair_data', usersQuestionnaireDataSchema)
module.exports = usersQuestionnaireData
