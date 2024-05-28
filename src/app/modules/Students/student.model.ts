import { Schema, model } from 'mongoose';
import {
  IAddress,
  IGuardian,
  ILocalGuardian,
  IName,
  IStudent,
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

const studentSchema = new Schema<IStudent>(
  {
    id: {
      type: String,
      required: true,
    },
    name: nameSchema,
    gender: {
      type: String,
      enum: ['male', 'Female'],
      required: true,
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
    presentAddress: addressSchema,
    permanentAddress: addressSchema,
    guardian: guardianSchema,
    localGuardian: localGuardianSchema,
  },
  { timestamps: true },
);

const Student = model<IStudent>('Student', studentSchema);
