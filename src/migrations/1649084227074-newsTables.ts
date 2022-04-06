import {MigrationInterface, QueryRunner} from "typeorm";

export class newsTables1649084227074 implements MigrationInterface {
    name = 'newsTables1649084227074'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '"2022-04-04T14:57:08.066Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '2022-04-04 14:56:26.776'`);
    }

}
