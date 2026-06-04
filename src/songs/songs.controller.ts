import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { createSongsDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsServices: SongsService,
        @Inject('CONNECTION')
        private connection: any
    ) {
        console.log(` this is connection string ${this.connection.CONNECTION_STRING}`)
    }


    @Post()
    findAll(@Body() createSong: createSongsDTO) {
        return this.songsServices.create(createSongsDTO)
    }

    @Get(':id')
    findOne(
        @Param(
            'id',
            new ParseIntPipe({
                errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE
            }),
        )
        id: Number
    ) {
        return id
    }



    @Put(':id')
    update() {
        return 'update  song by id'
    }

    @Delete(':id')
    Delete() {
        return 'Delete  song base on the based on id'
    }
}
