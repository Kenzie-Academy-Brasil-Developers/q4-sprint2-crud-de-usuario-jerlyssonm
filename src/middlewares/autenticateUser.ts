import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { config } from "../configs";
import { IUser, UserRepository } from "../repositories";

const authUser = (req: Request, res: Response, next: NextFunction) => {
    
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, config.secret, async (err,decoded) => {
    
            const userOn: IUser = await new UserRepository().findByEmail(decoded['email'])
            if(err){
                return res.status(401).json(
                    {message: "Missing authorization headers"}
                    )
                }
                if(!userOn){
                    return res.status(401).json({message: "Missing authorization headers"})
                }
            req.validated = userOn
    
            return next()
        })
    } catch (error) {
        return res.status(401).json({message: "Missing authorization headers"})
    }

}

export default authUser;