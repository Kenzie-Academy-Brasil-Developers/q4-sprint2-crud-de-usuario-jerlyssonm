import { Request, Response } from "express";
import { IUser, UserRepository } from "../../repositories";
import jwt from 'jsonwebtoken'; 
import bcrypt from 'bcryptjs';
import { config } from "../../configs";

const loginUserController = async (req:Request, res:Response)=>{
    try {
        const {email, password} = req.body
    const user: IUser = await new UserRepository().findByEmail(req.body['email']);
    
    const match = await bcrypt.compare(password, user.password)
    if(!match){
        return res.status(401).json({message: "Wrong email/password"})
    }

    const token = jwt.sign(
        {email: email, password: password, isAdm: user.isAdm},
        config.secret,
        {expiresIn: config.expires_in}
        )

    return res.json({token: token})
    } catch (error) {
        return res.status(401).json({message: 'Wrong email/password'})
    }
}

export default loginUserController;