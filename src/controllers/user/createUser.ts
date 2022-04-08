import { Request, Response } from "express";
import { IUser, UserRepository } from "../../repositories";
import { hashPassword } from "../../services/hashPassword";

const createUserController =  async (req: Request, res: Response) => {
    try {
        req.validated['password'] = await hashPassword(req.validated['password'])
    
        const user: IUser = await new UserRepository().saveUser(req.validated);
        delete user['password']
        return res.status(201).json(user)
        
    } catch (error) {
        res.status(400).json({message: 'E-mail already registered'})
    }
};

export default createUserController;