const mongoose = require('mongoose')
var questonnaireLogsSchema = new mongoose.Schema({
  questionnaire_id: {
    type: Schema.Types.ObjectId,
    ref: 'questionnaire'
  },
  viewed_by: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const questionnaireLogs = new mongoose.model('questionnaire_logs', questonnaireLogs)
module.exports = questionnaireLogs
