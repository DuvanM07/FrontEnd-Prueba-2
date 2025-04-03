const mongoose = require( 'mongoose')



const EmployeeSchema = new mongoose.Schema({
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
  // infoDepartamento: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Department',
  //   required: true,
  // },
});

const EmployeeModel = mongoose.model(
  'Employee',
  EmployeeSchema
)

module.exports = EmployeeModel;
// Modelo de empleado




// codigo (id)
// codigo
// nombre
// apellido
// apellido2
// codigo departamento (id)