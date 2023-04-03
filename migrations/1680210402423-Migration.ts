import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migration1680210402423 implements MigrationInterface {
  name = 'Migration1680210402423';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`promo-codes\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`code\` varchar(255) NOT NULL, \`discount\` float NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`product-photo\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`Photo path\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_1d9add8c203830918113440da1\` (\`Photo path\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`avatar\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`Avatar path\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_ea4fb32d59b30832019fa573ed\` (\`Avatar path\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`user_id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`surname\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`address\` varchar(255) NOT NULL, \`user_role\` enum ('client', 'courier') NOT NULL DEFAULT 'client', \`avatarId\` varchar(36) NULL, UNIQUE INDEX \`IDX_758b8ce7c18b9d347461b30228\` (\`user_id\`), UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), UNIQUE INDEX \`REL_58f5c71eaab331645112cf8cfa\` (\`avatarId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`product\` (\`id\` varchar(36) NOT NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`title\` varchar(255) NOT NULL, \`type\` varchar(255) NOT NULL, \`flavor type\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`rating\` float NOT NULL, \`price\` float NOT NULL, \`photoId\` varchar(36) NULL, UNIQUE INDEX \`IDX_f7bf944ad9f1034110e8c2133a\` (\`title\`), UNIQUE INDEX \`REL_2910df1471f6bf34df891d72e1\` (\`photoId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`product_users_user\` (\`productId\` varchar(36) NOT NULL, \`userId\` varchar(36) NOT NULL, INDEX \`IDX_c6c22c0d9d9dcb04d0fa35a883\` (\`productId\`), INDEX \`IDX_cb233ded53aaa05c7bab8fa117\` (\`userId\`), PRIMARY KEY (\`productId\`, \`userId\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`user\` ADD CONSTRAINT \`FK_58f5c71eaab331645112cf8cfa5\` FOREIGN KEY (\`avatarId\`) REFERENCES \`avatar\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`product\` ADD CONSTRAINT \`FK_2910df1471f6bf34df891d72e17\` FOREIGN KEY (\`photoId\`) REFERENCES \`product-photo\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`product_users_user\` ADD CONSTRAINT \`FK_c6c22c0d9d9dcb04d0fa35a883d\` FOREIGN KEY (\`productId\`) REFERENCES \`product\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE \`product_users_user\` ADD CONSTRAINT \`FK_cb233ded53aaa05c7bab8fa1175\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`product_users_user\` DROP FOREIGN KEY \`FK_cb233ded53aaa05c7bab8fa1175\``);
    await queryRunner.query(`ALTER TABLE \`product_users_user\` DROP FOREIGN KEY \`FK_c6c22c0d9d9dcb04d0fa35a883d\``);
    await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_2910df1471f6bf34df891d72e17\``);
    await queryRunner.query(`ALTER TABLE \`user\` DROP FOREIGN KEY \`FK_58f5c71eaab331645112cf8cfa5\``);
    await queryRunner.query(`DROP INDEX \`IDX_cb233ded53aaa05c7bab8fa117\` ON \`product_users_user\``);
    await queryRunner.query(`DROP INDEX \`IDX_c6c22c0d9d9dcb04d0fa35a883\` ON \`product_users_user\``);
    await queryRunner.query(`DROP TABLE \`product_users_user\``);
    await queryRunner.query(`DROP INDEX \`REL_2910df1471f6bf34df891d72e1\` ON \`product\``);
    await queryRunner.query(`DROP INDEX \`IDX_f7bf944ad9f1034110e8c2133a\` ON \`product\``);
    await queryRunner.query(`DROP TABLE \`product\``);
    await queryRunner.query(`DROP INDEX \`REL_58f5c71eaab331645112cf8cfa\` ON \`user\``);
    await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
    await queryRunner.query(`DROP INDEX \`IDX_758b8ce7c18b9d347461b30228\` ON \`user\``);
    await queryRunner.query(`DROP TABLE \`user\``);
    await queryRunner.query(`DROP INDEX \`IDX_ea4fb32d59b30832019fa573ed\` ON \`avatar\``);
    await queryRunner.query(`DROP TABLE \`avatar\``);
    await queryRunner.query(`DROP INDEX \`IDX_1d9add8c203830918113440da1\` ON \`product-photo\``);
    await queryRunner.query(`DROP TABLE \`product-photo\``);
    await queryRunner.query(`DROP TABLE \`promo-codes\``);
  }
}
