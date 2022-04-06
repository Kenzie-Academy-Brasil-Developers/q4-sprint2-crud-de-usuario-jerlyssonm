import {MigrationInterface, QueryRunner} from "typeorm";

export class editUpdateTable1649084804409 implements MigrationInterface {
    name = 'editUpdateTable1649084804409'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '"2022-04-04T15:06:45.424Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '"2022-04-04T15:06:45.424Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '2022-04-04 15:05:59.922'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '2022-04-04 15:05:59.922'`);
    }

}
