import { db } from "../database/database.connection.js";

async function createTravel({ passengerId, flightId }) {
    return await db.query(
        `INSERT INTO flights ("passengerId", "flightId") VALUES ($1, $2);`,
        [passengerId, flightId]
    );
};

export const travelRepository = { createTravel };