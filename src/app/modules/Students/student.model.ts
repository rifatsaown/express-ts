import { Schema } from 'mongoose';
import { IStudent } from './student.interface';

const studentSchema = new Schema<IStudent>({
  id: {
    type: String,
    required: true,
  },
  name: {
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
  },
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
  presentAddress: {
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
  },
  permanentAddress: {
    street: {
      type: String,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    zip: {
      type: String,
    },
  },
  guardian: {
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
  },
  localGuardian: {
    name: {
      type: String,
    },
    relation: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
});
