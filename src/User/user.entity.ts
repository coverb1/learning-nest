import { Playlist } from 'src/playlist/playlist.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity("user")

export class User{
    @PrimaryGeneratedColumn()
    id!:number

    @Column('text')
    name!:string

    @OneToMany(()=>Playlist,(playlist)=>playlist.user)
    playlists!:Playlist[]
}