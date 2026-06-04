import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    //local db
    //local array

    private readonly songs:any[]=[]

    create(song){
this.songs.push(song)
return {
    message:'song posted well',
    song:this.songs
};
    }
    //fetch this song from db
    findAll(){
        throw new Error('Error while fetching')
         return this.songs
    }
}
