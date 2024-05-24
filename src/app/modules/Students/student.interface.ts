interface IGuardian {
    name: string;
    relation: string;
    phone: string;
}

interface IName {
    firstName: string;
    middleName: string;
    lastName: string;
}

interface IAddress {
    street: string;
    city: string;
    state: string;
    country: string;
    zip: string;
}

interface ILocalGuardian {
    name: string;
    relation: string;
    phone: string;
}

interface IStudent {
    id: string;
    name: IName;
    gender: 'male' | 'female';
    dateOfBirth: string;
    age: number;
    email: string;
    phone: string;
    emergencyContact: string;
    bloodGroup?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
    presentAddress: IAddress;
    permanentAddress?: IAddress;
    guardian: IGuardian;
    localGuardian?: ILocalGuardian;
}

export {IStudent}