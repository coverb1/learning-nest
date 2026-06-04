
import {
  Column,
  Entity,
  OneToMany,
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
}