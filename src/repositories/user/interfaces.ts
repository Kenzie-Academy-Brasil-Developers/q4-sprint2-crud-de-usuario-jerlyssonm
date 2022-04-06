import { DeleteResult, UpdateResult } from "typeorm";

interface IUser {
    uuid: string;
    name: string;
    email: string;
    password: string;
    isAdm: boolean;
    createdOn: Date;
    updatedOn: Date;
};

interface IUserRepo {
    saveUser: (user: IUser) => Promise<IUser>;
    findUsers: () => Promise<IUser[]>
    findByEmail: (email: string) => Promise<IUser>;
    findByUuid: (uuid: string) => Promise<IUser>;
    deleteUser: (uuid: string) => Promise<DeleteResult>;
    updateUser: (uuid: string, data:IUser) => Promise<UpdateResult>

};

export { IUser, IUserRepo}