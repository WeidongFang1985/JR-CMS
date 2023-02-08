const StudentModel = require("../models/students");

const getAllStudents = async (req,res) => {
   const students = await StudentModel.find().exec();
   res.json(students);
}

const getStudentById = (req) => {
    // StudentModel.find({id: 'id'});
}

const addStudent = async (req,res) => {
    const {firstName,lastName, email} = req.body;
    //data validation
    const student = new StudentModel({firstName,lastName,email});
    await student.save();
    res.status(201).json(student);
}

const updateStudentById = () => {
    // StudentModel.updateOne({id: 'id'}, {$set: {firstName: 'xxx'}});
}

const deleteStudentById = () => {
    // StudentModel.deleteOne({id: id});
}

module.exports = {
    getAllStudents,
    getStudentById,
    addStudent,
    updateStudentById,
    deleteStudentById
}