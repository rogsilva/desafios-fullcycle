import mysql from 'mysql';
import { DB_CONFIG } from './config.js';

export function createTables(conn) {
    const sql = `
        CREATE TABLE IF NOT EXISTS people (
            id INT NOT NULL AUTO_INCREMENT,
            name VARCHAR(255) NOT NULL,
            PRIMARY KEY (id)
        );
    `;

    conn.query(sql, function (error) {
        if (error) throw error;
        console.log('Tabela people criada com sucesso!');
    });
}

export function insertPeople(conn, name) {
    const sql = `INSERT INTO people(name) VALUES('${name}')`;

    conn.query(sql, function (error) {
        if (error) throw error;
        console.log('Pessoa criada com sucesso!');
    });
}

export function selectPeople(conn, callback) {
    const sql = `SELECT * FROM people`;

    return conn.query(sql, function (error, results) {
        if (error) throw error;
        return callback(results);
    });
}

export function disconnect(conn) {
    conn.end(function (err) {
        if (err) {
            return console.log('error:' + err.message);
        }
        console.log('Close the database connection.');
    });
}

export const connect = () => mysql.createConnection(DB_CONFIG);
