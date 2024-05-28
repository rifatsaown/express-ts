export interface IGuardian {
  name: string;
  relation: string;
  phone: string;
}

export interface IName {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface IAddress {
  street: string;
  city: string;
  state: string;
  country: string;
  zip: string;
}

export interface ILocalGuardian {
  name: string;
  relation: string;
  phone: string;
}

export interface IStudent {
  id: string;
  name: IName;
  gender: 'male' | 'female';
  dateOfBirth: string;
  age: number;
  email: string;
  phone: string;
  emergencyContact: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: IAddress;
  permanentAddress?: IAddress;
  guardian: IGuardian;
  localGuardian?: ILocalGuardian;
}
