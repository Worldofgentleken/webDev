const pool = require('../models/studentModel');

const getAllStudents = async () => {
  const connection = await pool.getConnection();
  const [rows] = await connection.query('SELECT * FROM students');
  connection.release();
  return rows;
};

const getStudentById = async (id) => {
  const connection = await pool.getConnection();
  const [rows] = await connection.query('SELECT * FROM students WHERE student_id = ?', [id]);
  connection.release();
  return rows[0];
};

const createStudent = async (student) => {
  const connection = await pool.getConnection();
  const query = 'INSERT INTO students (student_name, birth, gender, intro) VALUES (?, ?, ?, ?)';
  const [result] = await connection.execute(query, [student.student_name, student.birth, student.gender, student.intro]);
  connection.release();
  return result.insertId;
};

const updateStudent = async (id, student) => {
  const connection = await pool.getConnection();
  const query = 'UPDATE students SET student_name = ?, birth = ?, gender = ?, intro = ? WHERE student_id = ?';
  const [result] = await connection.execute(query, [student.student_name, student.birth, student.gender, student.intro, id]);
  connection.release();
  return result.affectedRows > 0;
};

const deleteStudent = async (id) => {
  const connection = await pool.getConnection();
  const query = 'DELETE FROM students WHERE student_id = ?';
  const [result] = await connection.execute(query, [id]);
  connection.release();
  return result.affectedRows > 0;
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
};
