import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Playlist } from 'src/playlist/playlist.entity'
import { Artist } from 'src/artitsts/artitits.entity';

@Entity('songs')

export class Songs {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('date')
    date!:Date
    
    @Column('time')
    time!:Date

    @Column('text')
    lyrics!:string

    // One song can have many artists, and one artist can have many songs.
@ManyToMany(()=>Artist,(artist)=>artist.songs,{cascade:true})
@JoinTable({name:'song_artist'})
artist!:Artist[]

//  this means that many songs will belong in one playlist
@ManyToOne(()=>Playlist,(playlist)=>playlist.songs)
playlist!:Playlist
} 