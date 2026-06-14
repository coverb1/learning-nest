import { Exclude } from "class-transformer";
import { BlobOptions } from "node:buffer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
export class User {

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column()
  name!: string;

  @Column()
  lastName!: string;

  @Column()
  @Exclude()
  password!: string;

  @Column({nullable:true,type:'text'})
  twoFAsecrete!:string;

  @Column({default:false,type:'boolean'})
  enable2FA!:boolean
}