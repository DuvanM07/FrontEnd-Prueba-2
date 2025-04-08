const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true,
  },
  employees:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee'
  }]
});

const DepartmentModel = mongoose.model(
  'Department',
  departmentSchema
)
module.exports = DepartmentModel;
// Modelo de departamento