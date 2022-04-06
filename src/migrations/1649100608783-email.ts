import {MigrationInterface, QueryRunner} from "typeorm";

export class email1649100608783 implements MigrationInterface {
    name = 'email1649100608783'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '"2022-04-04T19:30:09.946Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '"2022-04-04T19:30:09.946Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '2022-04-04 18:53:13.463'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '2022-04-04 18:53:13.463'`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
    }

}
