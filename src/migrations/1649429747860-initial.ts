import {MigrationInterface, QueryRunner} from "typeorm";

export class initial1649429747860 implements MigrationInterface {
    name = 'initial1649429747860'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '"2022-04-08T14:55:49.046Z"'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '"2022-04-08T14:55:49.046Z"'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "updatedOn" SET DEFAULT '2022-04-08 14:54:08.879'`);
        await queryRunner.query(`ALTER TABLE "user" ALTER COLUMN "createdOn" SET DEFAULT '2022-04-08 14:54:08.879'`);
    }

}
