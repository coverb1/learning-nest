import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from './artitits.entity';
import { ArtitstsService } from './artitsts.service';
import { ArtitstsController } from './artitsts.controller';

@Module({
    imports:[TypeOrmModule.forFeature([Artist])],
    providers: [ArtitstsService],
    controllers: [ArtitstsController],
    exports:[ArtitstsService]
})
export class ArtitstsModule {}
