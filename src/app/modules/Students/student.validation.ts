import { z } from 'zod';

// Define the Zod schema for each subdocument
const nameValidationSchema = z.object({
  firstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .max(50, 'First name must be at most 50 characters'),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .max(50, 'Last name must be at most 50 characters'),
});

const addressValidationSchema = z.object({
  street: z.string().max(100, 'Street must be at most 100 characters'),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  zip: z.string(),
});

const guardianValidationSchema = z.object({
  name: z.string(),
  relation: z.string(),
  phone: z.string(),
});

const localGuardianValidationSchema = z.object({
  name: z.string().optional(),
  relation: z.string().optional(),
  phone: z
    .string()
    .regex(/^\+?[0-9]{10,}$/, 'Invalid phone number')
    .optional(),
});

// Define the main student schema
const studentValidationSchema = z.object({
  id: z.string(),
  name: nameValidationSchema,
  gender: z.enum(['male', 'female'], {
    errorMap: () => ({
      message: `Gender is required and should be either male or female`,
    }),
  }),
  dateOfBirth: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date of birth'),
  age: z
    .number()
    .nonnegative('Age must be a non-negative number')
    .min(1, 'Age must be at least 1'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^\+?[0-9]{10,}$/, 'Invalid phone number'),
  emergencyContact: z
    .string()
    .regex(/^(\+88)?01[0-9]{9}$/, 'Invalid phone number'),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: addressValidationSchema,
  permanentAddress: addressValidationSchema,
  guardian: guardianValidationSchema.nonstrict(),
  localGuardian: localGuardianValidationSchema.optional(),
});

export default studentValidationSchema;
