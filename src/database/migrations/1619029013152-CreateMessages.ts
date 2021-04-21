import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMessages1619029013152 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "messages",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "admin_id",
                        type: "uuid",
                        isNullable: true,

                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                    {
                        name:"text",
                        type:"varchar",
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default: "now()",
                    },
                ],
                //Pode receber um array de FK
                foreignKeys: [
                    {
                        name: "FKuser",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        //Coluna que vai guardar a FK referenciada
                        columnNames: ["user_id"],
                        //Quando a FK tentar ser removida
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL", 

                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("messages");
    }

}
