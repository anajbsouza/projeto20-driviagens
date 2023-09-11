import { db } from "../database/database.connection.js";

async function createCity({ name }) {
    return await db.query(
        `INSERT INTO cities (name) VALUES ($1);`,
        [name]
    );
};

async function readCity({ name }) {
    const result = await db.query(
        `SELECT * FROM cities WHERE name = ($1);`,
        [name]
    );
    return result.rows[0];
}

export const cityRepository = { createCity, readCity };