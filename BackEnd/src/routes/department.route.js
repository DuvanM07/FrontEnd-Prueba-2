const express = require('express')
const { createDepartment, getDepartments, getDepartmentById, deleteDepartmentById, updateDepartmentById } = require('../controllers/department.controller')
const router = express.Router()

router.post( '/', createDepartment)
router.get( '/', getDepartments )
router.get( '/:id', getDepartmentById )
router.delete( '/:id', deleteDepartmentById )
router.patch( '/:id', updateDepartmentById )

module.exports = router