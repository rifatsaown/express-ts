import { IStudent } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (student: IStudent) => {
  const result = await StudentModel.create(student);
  return result;
};

const getStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getStudentByIdFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

const modifyStudentByIdInDB = async (id: string, student: IStudent) => {
  const result = await StudentModel.findOneAndUpdate({ id }, student, { new: true });
  return result;
}

export const StudentServices = {
  createStudentIntoDB,
  getStudentsFromDB,
  getStudentByIdFromDB,
};
