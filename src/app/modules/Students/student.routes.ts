import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.post('/create-students', StudentController.createStudent);
router.get('/', StudentController.getStudents);
router.get('/:studentId', StudentController.getStudentById);

export const StudentRoutes = router;