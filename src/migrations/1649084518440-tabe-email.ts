import {MigrationInterface, QueryRunner} from "typeorm";

export class tabeEmail1649084518440 implements MigrationInterface {
    name = 'tabeEmail1649084518440'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '"2022-04-04T15:01:59.445Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '2022-04-04 15:00:56.524'`);
    }

}
