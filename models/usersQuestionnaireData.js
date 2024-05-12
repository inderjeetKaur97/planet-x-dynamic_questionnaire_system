const mongoose = require('mongoose')
var usersQuestionnaireDataSchema = new mongoose.Schema({
  questionnaire_id: {
    type: Schema.Types.ObjectId,
    ref: 'questionnaire'
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  questionnaire_data: { type: String, required: true },
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
