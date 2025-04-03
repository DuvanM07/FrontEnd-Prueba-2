const { Scema, model } = require('mongoose');
const departmentSchema = new Schema({
  nameUser: {
    type: String,
    required: true,
    ref: 'User'

  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = model('Department', departmentSchema);