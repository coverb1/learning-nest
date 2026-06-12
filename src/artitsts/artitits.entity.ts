
import { User } from 'src/User/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('Artist')

export class Artist{
    @PrimaryGeneratedColumn()
    id!:number
    @Column('text')
    name!:string
    @Column('text')
    songs!:string

    @OneToOne(()=>User)
    @JoinColumn()
    user!:User
}