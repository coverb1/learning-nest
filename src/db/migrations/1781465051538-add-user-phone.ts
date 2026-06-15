import { MigrationInterface, QueryRunner } from "typeorm";

export class AddUserPhone1781465051538 implements MigrationInterface {
    name = 'AddUserPhone1781465051538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "Phone" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "Phone"`);
    }

}
