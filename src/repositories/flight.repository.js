import { db } from "../database/database.connection.js";

async function createFlight({ origin, destination, date }) {
    return await db.query(
        `INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`,
        [origin, destination, date]
    );
}

async function readFlight(id) {
    const result = await db.query(`
        SELECT * FROM cities WHERE id = $1`,
        [id]);
    return result.rows[0];
}

export const flightRepository = { createFlight, readFlight };