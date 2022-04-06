import {Request, Response} from "express";
import { IUser, UserRepository } from "../../repositories";

const updateUserController = async (req:Request, res:Response) =>{
    try {
        const {uuid} = req.params
        const user: IUser = await new UserRepository().findByUuid(uuid)    
        await new UserRepository().updateUser(user.uuid , req.validated)
        const updatedUser: IUser = await new UserRepository().findByUuid(user.uuid)
        delete updatedUser['password']
        return res.status(201).json(updatedUser)
        
    } catch (error) {
        return res.status(401).json({message: 'Missing authorization headers'})
    }
}

export default updateUserController;