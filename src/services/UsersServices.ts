import { getCustomRepository, Repository } from "typeorm"
import {User} from "../entities/Users"
import { UsersRepository } from "../repositories/UsersRepository"



class UsersService{
  private usersRepository: Repository<User>
  async create(email:string){
    
    //Verificar se o usuario existe
    
    const userExists = await this.usersRepository.findOne({
      email
    });

    //Se não existir, salvar no BD

    if(userExists){
      return userExists;
    }

    const user = this.usersRepository.create({
      email
    })

    await this.usersRepository.save(user);

    return user;


    //Se existir, retornar user


  }
}

export{UsersService}