const StudentModel = require("../models/students");

exports.getAllStudents = async (req,res) => {
   const students = await StudentModel.find().exec();
   res.json(students);
}

exports.getStudentById = (req,res) => {
    const id = req.params.id;
    console.log(id)
    const singleStudent = StudentModel.find({id: id});
    // res.send(singleStudent);
    // res.send(JSON.stringify(singleStudent));
}

exports.addStudent = async (req,res) => {
    const {firstName,lastName, email} = req.body;
    //data validation
    const student = new StudentModel({firstName,lastName,email});
    await student.save();
    res.status(201).json(student);
}

exports.updateStudentById = () => {
    // StudentModel.updateOne({id: 'id'}, {$set: {firstName: 'xxx'}});
}

exports.deleteStudentById = () => {
    // StudentModel.deleteOne({id: id});
}

// module.exports = {
//     getAllStudents,
//     getStudentById,
//     addStudent,
//     updateStudentById,
//     deleteStudentById
// }