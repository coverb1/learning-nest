import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { seedData } from 'src/db/seed/data-seeds';

@Injectable()
export class SeedsService {
    constructor(private readonly connection: DataSource) {}

    async seed(): Promise<void> {
        const queryRunner = this.connection.createQueryRunner()
        await queryRunner.startTransaction()

        try {
            const manager = queryRunner.manager
            await seedData(manager)
            await queryRunner.commitTransaction()
        } catch (error) {
            console.error('error during Database seeding:', error) // ✅ print the real error
            await queryRunner.rollbackTransaction()               // ✅ added ()
        } finally {
            await queryRunner.release()                           // ✅ added ()
        }
    }
}