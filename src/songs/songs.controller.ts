import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { createSongsDTO } from './dto/create-song-dto';
import { Songs } from './song.entity';

@Controller('songs')
export class SongsController {
    constructor(private songsServices: SongsService,
        
    ) {
        
    }


    @Post()
    create(@Body() createSong: createSongsDTO) {
        return this.songsServices.create(createSong)
    }

    @Get(':id')
    findOne(
        @Param( 'id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }), )id: number
    ) :Promise<Songs|null> {
        return this.songsServices.findOne(id)
    }

    @Put(':id')
    update() {
        return 'update  song by id'
    }

    @Delete(':id')
    Delete(
        @Param("id",new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id:number
    ) :Promise<void>{
       return this.songsServices.remove(id)
    }
}
