import { Request, Response } from "express";
import { IUser, UserRepository } from "../../repositories";

const getUsersController = async (_: Request, res: Response) => {
    try {
        const users: IUser[] = await new UserRepository().findUsers();
    
        users.map((item) => delete item['password'])
        return res.status(200).json(users)   
        
    } catch (error) {
        return res.status(401).json({message: "Missing authorization headers"})
        
    }
};

export default getUsersController;