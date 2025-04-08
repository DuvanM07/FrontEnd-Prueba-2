const { model } = require('mongoose');

const DepartmentModel = require('../models/departament.model')

const createDepartment = async (req, res) => {
  const inputData = req.body

  try {
    const data = await DepartmentModel.create(inputData)

    res.status(201).json({
      ok: true,
      msg: 'Department created successfully',
      data
    })
  } catch (error) {
    res.status(500).json({ msg: 'Error creating department', error })
    console.error('error', error)
  }
}

const getDepartments = async (req, res) => {
  try {
    const data = await DepartmentModel.find().populate('Employees')

    res.json({
      ok: true,
      data
    })
  } catch (error) {
    console.error(error)
    res.json({
      ok: false,
      msg: 'An exception occurred while obtaining the departments'
    })
  }
}

const getDepartmentById = async (req, res) => {
  const id = req.params.id
  try {
    const data = await DepartmentModel.findById(id).populate('Employees')

    res.json({
      ok: true,
      data
    })
  } catch (error) {
    console.error(error)
    res.json({
      ok: false,
      msg: 'An exception occurred while obtaining the department by ID'
    })
  }
}

const deleteDepartmentById = async (req, res) => {
  const id = req.params.id
  try {
    const data = await DepartmentModel.findByIdAndDelete(id)

    res.json({
      ok: true,
      msg: 'Department deleted successfully',
      data
    })
  } catch (error) {
    console.error(error)
    res.json({
      ok: false,
      msg: 'An exception occurred while deleting the department'
    })
  }
}

const updateDepartmentById = async (req, res) => {
  const id = req.params.id
  const inputData = req.body

  try {
    const data = await DepartmentModel.findByIdAndUpdate(id, inputData)
    res.json({
      ok: true,
      msg: 'Department updated successfully',
      data
    })
  } catch (error) {
    console.error(error)
    res.json({
      ok: false,
      msg: 'An exception occurred while updating the department by ID'
    });
  }
}

module.exports = {
  createDepartment,
  getDepartments,
  getDepartmentById,
  deleteDepartmentById,
  updateDepartmentById
}