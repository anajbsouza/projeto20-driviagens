import { db } from "../database/database.connection.js";

async function createFlight({ origin, destination, date }) {

    const result = await db.query(
        `INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`,
        [origin, destination, date]
    );

    return result;
};

export const flightRepository = { createFlight };