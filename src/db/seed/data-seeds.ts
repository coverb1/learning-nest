import { Artist } from "src/artitsts/artitits.entity";
import { User } from "src/User/user.entity";
import { EntityManager } from "typeorm";
import {faker} from '@faker-js/faker'
import * as bcrypt from 'bcrypt'
import { Playlist } from "src/playlist/playlist.entity";

export const seedData=async(manager:EntityManager):Promise<void>=>{
    // add your seedingg logic here using  the manager

    await seedUser();
   

    async function seedUser(){
        const salt=await bcrypt.genSalt()
        const encrypted=await bcrypt.hash('123456',salt)

        const user=new User
        user.name=faker.person.firstName()
        user.lastName=faker.person.lastName()
        user.email=faker.internet.email()
        user.password=encrypted

        await manager.getRepository(User).save(user)
    }
}