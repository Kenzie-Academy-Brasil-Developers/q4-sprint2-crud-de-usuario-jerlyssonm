import { Request, Response } from "express";
import { IUser, UserRepository } from "../../repositories";

const getProfileController = async (req: Request, res: Response) => {
    const user: IUser = await new UserRepository().findByUuid(req.validated.uuid)
    delete user['password']
    return res.status(200).json(user)
}

export default getProfileController