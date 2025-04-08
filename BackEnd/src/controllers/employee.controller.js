const { model } = require('mongoose');

const EmployeeModel = require('../models/employee.model')
const DepartmentModel = require('../models/departament.model')


const createEmployee = async (req, res) => {
  const inputData = req.body;

  const departmentId = inputData.department; // Obtener el ID del departamento desde el cuerpo de la solicitud
  
  try {
    const department = await DepartmentModel.findById(departmentId); // Verificar si el departamento existe
    if (!department) {
      return res.status(400).json({ msg: 'Department not found' });
    }

    const data = await EmployeeModel.create(inputData);
    console.log('data', data._id.toString());
    department.employees.push(data._id.toString()); // Agregar el ID del empleado al departamento
    await department.save(); // Guardar los cambios en el departamento

    res.status(201).json({
      ok: true,
      msg: 'Employee created successfully',
      data
    });
  
  } 
  catch (error) {
    
    res.status(500).json({ msg: 'Error creating employee', error });
    console.error('error', error);
  }
}

const getEmployees = async ( req, res) => {

  try {
    const data = await EmployeeModel.find().populate('department');

    res.json({
      ok:true,
      data
    });
  } 
  catch (error) { 
    console.error( error );
    res.json({
      ok:false,
      msg:'Ha ocurrido una excepcion al obtener los empleados'
    });
  }
}

const getEmployeeById = async ( req, res ) => {
  const id = req.params.id; 
  try {
    const data = await EmployeeModel.findById( id );

    res.json({
      ok:true,
      data
    });
  } 
  catch (error) {
    console.error( error );
    res.json({
      ok:false,
      msg:'Ha ocurrido una excepcion al obtener el empleado por ID'
    });
  }
}

const deleteEmployeeById = async ( req, res) => {
  const id = req.params.id;
  try {
    const data = await EmployeeModel.findByIdAndDelete( id );
    res.json({
      ok:true,
      data
    });
  }
  catch (error) {
    console.error( error );
    res.json({
      ok:false,
      msg:'Ha ocurrido una excepcion al eliminar el empleado por ID'
    });
  }
}

const updateEmployeeById = async ( req, res ) => {
  const id = req.params.id;
  try {
    const data = await EmployeeModel.findByIdAndUpdate( id )

    res.json({
      ok:true,
      data
    });
  } catch (error) {
    console.error( error );
    res.json({
      ok:false,
      msg:'Ha ocurrido una excepcion al actualizar el empleado por ID'
    });
  }
}



module.exports = { createEmployee, getEmployees, getEmployeeById, deleteEmployeeById, updateEmployeeById};
