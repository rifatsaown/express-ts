import { IStudent } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (studentData: IStudent) => {
  /* -----------------------------------------------------
  // static method
  // if (StudentModel.isUserExist(studentData.id) !== null) {
  //   throw new Error('Student already exists');
  // }
 ---------------------------------------------------------*/

  const result = await StudentModel.create(studentData); // static method

  /*-----------------------------------------------------------
 // instance method  
  const student = new StudentModel(studentData);
  if ((await student.isUserExist(studentData.id)) !== null) {
    throw new Error('Student already exists');
  }
  const result = await student.save(); // instance method 
  ------------------------------------------------------------*/

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

export const StudentServices = {
  createStudentIntoDB,
  getStudentsFromDB,
  getStudentByIdFromDB,
};
