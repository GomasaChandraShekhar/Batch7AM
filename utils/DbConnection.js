const mysql = require('mysql2/promise');

let connection;

class DbConnection {

    async connectMysql() {
        try {

            connection = await mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'root',
                database: 'sakila'
            });
            const [rows, cols] = await connection.query(`select * from actor limit 5`);

            // console.log(rows);
            // console.log(cols);

            // for (const { actor_id, first_name, last_name } of rows) {

            //     console.log("Actor Id :: ", actor_id);
            //     console.log("Actor First Name :: ", first_name);
            //     console.log("Actor Last Name :: ", last_name);

            //     // if (data.actor_id == 5) {
            //     //     break;
            //     // }
            // }
        } catch (error) {
            console.log(error);

        }
        await connection.end();
    }

    async connectMysqlDb() {

        try {
            connection = await mysql.createConnection(
                {
                    host: "localhost",
                    port: '3306',
                    user: 'root',
                    password: 'root',
                    database: 'sakila'
                }
            );

            const [results, fields] = await connection.query('select * from city limit 5;');

            // console.table(results);

            for (const result of results) {
                console.log(result.city_id);
                console.log(result.city);
                console.log(result.country_id);
                console.log(result.last_update);
            }
        }
        catch (error) {
            console.log(error);

        }
        try {
            // if (connection) {
            await connection.end();
            // }
        } catch (error) {
            console.log(error);

        }
    }

}


const dbConnection = new DbConnection();
dbConnection.connectMysqlDb();

