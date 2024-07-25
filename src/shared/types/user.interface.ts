import { ICountry } from "./country.interface";

export interface IUser {
    _id?: string;
    address?: string;
    avatar?: string;
    birthday?: number;
    createdAt: number;
    updatedAt: number;
    email?: string;
    login?: string;
    number?: string;
    firstName?: string;
    lastName?: string;
    country?: ICountry;
    surname?: string;
    isStaff: boolean;
    online: boolean;
    sex: boolean;
    isVerified: boolean;
    verificationCode: number;
}
