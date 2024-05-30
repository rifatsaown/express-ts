import { Schema, model } from 'mongoose';
import {
  IAddress,
  IGuardian,
  ILocalGuardian,
  IName,
  IStudent,
  IStudentModel,
} from './student.interface';

const nameSchema = new Schema<IName>({
  firstName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const addressSchema = new Schema<IAddress>({
  street: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  zip: {
    type: String,
    required: true,
  },
});

const guardianSchema = new Schema<IGuardian>({
  name: {
    type: String,
    required: true,
  },
  relation: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

const localGuardianSchema = new Schema<ILocalGuardian>({
  name: {
    type: String,
  },
  relation: {
    type: String,
  },
  phone: {
    type: String,
  },
});

// Define the student schema
const studentSchema = new Schema<IStudent, IStudentModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: nameSchema,
      required: true,
    },
    gender: {
      type: String,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    emergencyContact: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: {
      type: addressSchema,
      required: true,
    },
    permanentAddress: {
      type: addressSchema,
      required: true,
    },
    guardian: {
      type: guardianSchema,
      required: true,
    },
    localGuardian: {
      type: localGuardianSchema,
    },
  },
  { timestamps: true },
);

// pre save hook
studentSchema.pre('save', async function (next) {
  const student = this;
  if (student.isModified('id')) {
    const isExist = await StudentModel.isUserExist(student.id);
    if (isExist) {
      throw new Error('Student already exists');
    }
  }
  next();
});

// for crearing static method
studentSchema.statics.isUserExist = async (id: string) => {
  return await StudentModel.findOne({ id });
};

/*----------------------------------------------- 
// make a custom instance method in the schema
studentSchema.methods.isUserExist = async (id: string) => {
  return await StudentModel.findOne({ id });
}; -------------------------------------------------*/

// Create the student model
export const StudentModel = model<IStudent, IStudentModel>(
  'Student',
  studentSchema,
);
