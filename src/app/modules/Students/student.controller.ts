import { Request, Response } from 'express';

const createStudent = async (req: Request, res: Response) => {
  try {
    console.log('Creating student');
    
  } catch (error) {
    console.log('Error creating student', error);
  }
};
