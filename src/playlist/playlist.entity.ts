import { Songs } from 'src/songs/song.entity';
import { User } from 'src/User/user.entity';

import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('playlist')
export class Playlist {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  // many playlist be long to one user

 

@OneToMany(() => Songs, (song) => song.playlist)
songs!: Songs[];
}