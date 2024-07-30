const studentService = require('../services/studentService');

const getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    res.json(students);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

const getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await studentService.getStudentById(id);
    if (!student) {
      return res.status(404).send('Student not found');
    }
    res.json(student);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

const createStudent = async (req, res) => {
  const { student_name, birth, gender, intro } = req.body;
  try {
    const id = await studentService.createStudent({ student_name, birth, gender, intro });
    res.json({ id });
  } catch (err) {
    res.status(500).send('Server error');
  }
};

const updateStudent = async (req, res) => {
  const { id } = req.params;
  const { student_name, birth, gender, intro } = req.body;
  try {
    const success = await studentService.updateStudent(id, { student_name, birth, gender, intro });
    if (!success) {
      return res.status(404).send('Student not found');
    }
    res.send('Student updated successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
};

const deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const success = await studentService.deleteStudent(id);
    if (!success) {
      return res.status(404).send('Student not found');
    }
    res.send('Student deleted successfully');
  } catch (err) {
    res.status(500).send('Server error');
  }
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};
