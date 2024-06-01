import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const zodParsedData = studentValidationSchema.parse(studentData);

    const result = await StudentServices.createStudentIntoDB(zodParsedData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    console.log('Error creating student', error);
    res
      .status(500)
      .json({
        success: false,
        message: (error as Error).message || 'Error creating student',
        error,
      });
  }
};

const getStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Students fetched successfully',
      data: result,
    });
  } catch (error) {
    console.log('Error getting students', error);
  }
};

const getStudentById = async (req: Request, res: Response) => {
  try {
    const id = req.params.studentId;
    const result = await StudentServices.getStudentByIdFromDB(id);
    res.status(200).json({
      success: true,
      message: 'Student fetched successfully',
      data: result,
    });
  } catch (error) {
    console.log('Error getting student', error);
  }
};

export const StudentController = { createStudent, getStudents, getStudentById };
