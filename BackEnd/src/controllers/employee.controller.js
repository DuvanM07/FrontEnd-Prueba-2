const { model } = require('mongoose');

const EmployeeModel = require('../models/employee.model')


const createEmployee = async (req, res) => {
    const { name, lastname, lastname2 } = req.body
    try {
    const dbEmployee = new Employee({ name, lastname, lastname2 });
    await dbEmployee.save();
    console.error('Employee created:', dbEmployee);
    res.status(201).json(dbEmployee);
    console.error('error', error);
  } catch (error) {
    
    res.status(500).json({ msg: 'Error creating employee', error });
    console.error('error', error);
  }
}

const getEmployees = async ( req, res) => {

  try {
    const data = await EmployeeModel.find({}).populate('Department');

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
