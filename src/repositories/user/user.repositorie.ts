import { Repository, getRepository } from "typeorm";
import { User } from "../../entities/User";
import { IUser, IUserRepo } from "./interfaces";

class UserRepository implements IUserRepo {
    private ormRepository: Repository<User>;

    constructor() {
        this.ormRepository = getRepository(User);
    }
    
    saveUser = async (user: IUser) => await this.ormRepository.save(user);
    findUsers = async () => await this.ormRepository.find();
    findByEmail = async (email: string) => await this.ormRepository.findOne({where: {email}})
    findByUuid = async (uuid: string) => await this.ormRepository.findOne({where: {uuid}})
    deleteUser = async (uuid: string) => await this.ormRepository.delete(uuid)
    updateUser = async (uuid: string, data: IUser) => await this.ormRepository.update(uuid, data)
}

export {UserRepository, IUser}