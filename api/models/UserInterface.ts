export interface IUser extends Document {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    iat: number;
}