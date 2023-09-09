import { db } from "../database/database.connection.js";

async function createTravel({ passengerId, flightId }) {

    const result = await db.query(
        `INSERT INTO flights (passengerId, flightId) VALUES ($1, $2);`,
        [passengerId, flightId]
    );

    return result;
};

export const travelRepository = { createTravel };