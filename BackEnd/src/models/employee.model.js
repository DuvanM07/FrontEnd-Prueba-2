const mongoose = require( 'mongoose')

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  lastname2: {
    type: String,
  }, 
  department: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Department',
    required: true
  }
});

const EmployeeModel = mongoose.model(
  'Employee',
  employeeSchema
)

module.exports = EmployeeModel;
// Modelo de empleado




// codigo (id)
// codigo
// nombre
// apellido
// apellido2
// codigo departamento (id)