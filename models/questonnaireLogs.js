const mongoose = require('mongoose')
var questonnaireLogsSchema = new mongoose.Schema({
  questionnaireId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'questionnaire',
    required: true
  },
  viewedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  isSubmitted: { type: Boolean, required: true },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const questionnaireLogs = new mongoose.model('questionnaire_logs', questonnaireLogsSchema)
module.exports = questionnaireLogs
