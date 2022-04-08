import {MigrationInterface, QueryRunner} from "typeorm";

export class renamedColumnUser1649459755508 implements MigrationInterface {
    name = 'renamedColumnUser1649459755508'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdOn" SET DEFAULT '"2022-04-08T23:15:56.685Z"'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedOn" SET DEFAULT '"2022-04-08T23:15:56.685Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updatedOn" SET DEFAULT '2022-04-08 23:14:46.152'`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "createdOn" SET DEFAULT '2022-04-08 23:14:46.152'`);
    }

}
