import { db } from "../database/database.connection.js";

async function createPassenger({ firstName, lastName }) {

    const result = await db.query(
        `INSERT INTO passengers (firstName, lastName) VALUES ($1, $2);`,
        [firstName, lastName]
    );

    return result;
};

export const passengerRepository = { createPassenger };