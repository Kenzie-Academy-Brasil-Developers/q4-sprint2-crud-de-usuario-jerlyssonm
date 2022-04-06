import { IUser } from "../repositories";

declare module "express" {
    export interface Request {
        validated: IUser;
        uuid: string
    }
}