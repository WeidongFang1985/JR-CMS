const {Router} = require('express');
const student = require("../controllers/students");

const studentRouter = Router();

studentRouter.get('',student.getAllStudents);
studentRouter.get('/:id',student.getStudentById);
studentRouter.post('',student.addStudent);
studentRouter.put('/:id',student.updateStudentById);
studentRouter.delete('/:id',student.deleteStudentById);


module.exports = studentRouter;
