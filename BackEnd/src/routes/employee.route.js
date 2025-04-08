const express = require('express')
const { createEmployee, getEmployees, getEmployeeById, deleteEmployeeById, updateEmployeeById } = require('../controllers/employee.controller')
const router = express.Router()

router.post( '/', createEmployee)
router.get( '/', getEmployees )
router.get( '/:id', getEmployeeById )
router.delete( '/:id', deleteEmployeeById )
router.patch( '/:id', updateEmployeeById )

module.exports = router