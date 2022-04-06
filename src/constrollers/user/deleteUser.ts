import { Request, Response } from "express";
import { IUser, UserRepository } from "../../repositories";

const deleteUserController = async (req: Request, res: Response) => {
try {
        await new UserRepository().deleteUser(req.uuid)
        return res.status(200).json({message: 'User deleted with success'})

} catch (error) {
    return res.status(400).json({message: 'wrong in request'})
}
}

export default deleteUserController;