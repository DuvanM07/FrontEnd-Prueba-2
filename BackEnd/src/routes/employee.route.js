const express = require('express')
const { createEmployee, getEmployees, getEmployeeById, deleteEmployeeById, updateEmployeeById } = require('../controllers/employee.controller')
const router = express.Router()

router.post( '/create-employee', createEmployee)
router.get( '/get-employee/:id', getEmployees )
router.get( '/get-employees', getEmployeeById )
router.delete( '/delete-employee/:id', deleteEmployeeById )
router.patch( 'update-employee/:id', updateEmployeeById )

module.exports = router