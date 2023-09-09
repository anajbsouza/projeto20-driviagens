import { db } from "../database/database.connection.js";

async function createCity({ name }) {

    const result = await db.query(
        `INSERT INTO cities (name) VALUES ($1);`,
        [name]
    );

    return result;
};

export const cityRepository = { createCity };