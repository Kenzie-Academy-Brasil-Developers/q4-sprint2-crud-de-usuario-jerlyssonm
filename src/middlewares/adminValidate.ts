import { NextFunction, Request, Response } from "express";
import { IUser, UserRepository } from "../repositories";

const adminValidate = async (req: Request, res: Response, next: NextFunction) => {

        const {uuid} = req.params;
        const { isAdm , email} = req.validated
        const user: IUser = await new UserRepository().findByEmail(email) 
        if(isAdm){
            req.validated = user
            req.uuid = uuid
            return next()
        }

        if(user.uuid === uuid){   

            req.uuid = uuid
            return next()
        }
        return res.status(401).json({message: "Unauthorized"})
}

export default adminValidate;