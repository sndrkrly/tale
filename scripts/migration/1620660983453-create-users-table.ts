import {MigrationInterface, QueryRunner} from "typeorm";

export class createUsersTable1620660983453 implements MigrationInterface {
    name = 'createUsersTable1620660983453'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "usertoken" character varying NOT NULL, "verified" boolean NOT NULL DEFAULT false, "online" boolean NOT NULL DEFAULT false, "username" character varying NOT NULL, CONSTRAINT "UQ_5372672fbfd1677205e0ce3ece4" UNIQUE ("firstName"), CONSTRAINT "UQ_af99afb7cf88ce20aff6977e68c" UNIQUE ("lastName"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_2c8977fe6560b040f6a84d43cd4" UNIQUE ("usertoken"), CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5372672fbfd1677205e0ce3ece" ON "users" ("firstName") `);
        await queryRunner.query(`CREATE INDEX "IDX_af99afb7cf88ce20aff6977e68" ON "users" ("lastName") `);
        await queryRunner.query(`CREATE INDEX "IDX_97672ac88f789774dd47f7c8be" ON "users" ("email") `);
        await queryRunner.query(`CREATE INDEX "IDX_2c8977fe6560b040f6a84d43cd" ON "users" ("usertoken") `);
        await queryRunner.query(`CREATE INDEX "IDX_283ea82ca72e799655a957055f" ON "users" ("verified") `);
        await queryRunner.query(`CREATE INDEX "IDX_13df45be518cf6f9469879fa65" ON "users" ("online") `);
        await queryRunner.query(`CREATE INDEX "IDX_fe0bb3f6520ee0469504521e71" ON "users" ("username") `);
        await queryRunner.query(`CREATE TABLE "subs" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "name" character varying NOT NULL, "title" character varying NOT NULL, "description" text, "imageUrn" character varying, "bannerUrn" character varying, "email" character varying, CONSTRAINT "UQ_2ae46b179b70ab8179597adb8c0" UNIQUE ("name"), CONSTRAINT "PK_c2311ff9e741af88151e0aa2299" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2ae46b179b70ab8179597adb8c" ON "subs" ("name") `);
        await queryRunner.query(`CREATE TABLE "posts" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "identifier" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "price" character varying NOT NULL, "place" character varying NOT NULL, "slug" character varying NOT NULL, "status" character varying NOT NULL, "highlighted" character varying NOT NULL, "subName" character varying NOT NULL, "username" character varying NOT NULL, CONSTRAINT "PK_2829ac61eff60fcec60d7274b9e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_152316363d20c399f934c4f74b" ON "posts" ("identifier") `);
        await queryRunner.query(`CREATE INDEX "IDX_54ddf9075260407dcfdd724857" ON "posts" ("slug") `);
        await queryRunner.query(`ALTER TABLE "subs" ADD CONSTRAINT "FK_448513ecb9c841d1622139ed359" FOREIGN KEY ("email") REFERENCES "users"("email") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_42377e3f89a203ca74d117e5961" FOREIGN KEY ("username") REFERENCES "users"("username") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "posts" ADD CONSTRAINT "FK_cca21672314ce54982a6dd5d121" FOREIGN KEY ("subName") REFERENCES "subs"("name") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_cca21672314ce54982a6dd5d121"`);
        await queryRunner.query(`ALTER TABLE "posts" DROP CONSTRAINT "FK_42377e3f89a203ca74d117e5961"`);
        await queryRunner.query(`ALTER TABLE "subs" DROP CONSTRAINT "FK_448513ecb9c841d1622139ed359"`);
        await queryRunner.query(`DROP INDEX "IDX_54ddf9075260407dcfdd724857"`);
        await queryRunner.query(`DROP INDEX "IDX_152316363d20c399f934c4f74b"`);
        await queryRunner.query(`DROP TABLE "posts"`);
        await queryRunner.query(`DROP INDEX "IDX_2ae46b179b70ab8179597adb8c"`);
        await queryRunner.query(`DROP TABLE "subs"`);
        await queryRunner.query(`DROP INDEX "IDX_fe0bb3f6520ee0469504521e71"`);
        await queryRunner.query(`DROP INDEX "IDX_13df45be518cf6f9469879fa65"`);
        await queryRunner.query(`DROP INDEX "IDX_283ea82ca72e799655a957055f"`);
        await queryRunner.query(`DROP INDEX "IDX_2c8977fe6560b040f6a84d43cd"`);
        await queryRunner.query(`DROP INDEX "IDX_97672ac88f789774dd47f7c8be"`);
        await queryRunner.query(`DROP INDEX "IDX_af99afb7cf88ce20aff6977e68"`);
        await queryRunner.query(`DROP INDEX "IDX_5372672fbfd1677205e0ce3ece"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
