import { InjectRepository } from '@nestjs/typeorm'
import { Playlist } from './playlist.entity'
import { Songs } from 'src/songs/song.entity'
import { Injectable } from '@nestjs/common'
import { Repository } from 'typeorm'
import { User } from 'src/User/user.entity'
import { creatPlayListDto } from './dto/create-playlist.dto'

@Injectable()

export class PlaylistService {
    constructor(
        @InjectRepository(Playlist)
        private PlayListRepo: Repository<Playlist>,

        @InjectRepository(Songs)
        private songsRepo: Repository<Songs>,

        @InjectRepository(User)
        private userRepo: Repository<User>
    ) { }

    async create(playlistDTO: creatPlayListDto): Promise<Playlist> {
        const playlist = new Playlist();
        playlist.name = playlistDTO.name // Here we are giving the playlist name


        // A song will be  The array of Ids That we are get we are getting from Dto object
        const songs = await this.songsRepo.findByIds(playlistDTO.songs) //get songs from databse

        //sets the relation for the songs with  Playlist entity

        playlist.songs = songs;


        // a user will be the Id of  USer We are getting from the request
        //when  we implimented  the user AUthantication this id will become  the logged 

        const user = await this.userRepo.findOneBy({ id: playlistDTO.user })
        console.log(user)

        if (!user) {
            throw new Error("User Not Found")
        }

        playlist.user = user
        const savedPlaylist = await this.PlayListRepo.save(playlist)
        console.log(savedPlaylist)

        return savedPlaylist

    }

}