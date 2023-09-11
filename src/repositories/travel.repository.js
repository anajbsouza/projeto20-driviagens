import { db } from "../database/database.connection.js";

async function createTravel({ passengerId, flightId }) {
    return await db.query(
        `INSERT INTO flights ("passengerId", "flightId") VALUES ($1, $2);`,
        [passengerId, flightId]
    );
};

async function readPasseger(id){
    const result = await db.query(`SELECT * FROM passagers WHERE id = $1`, [id])
    return result.rows[0]   
}

async function readFlight(id){
    const result = await db.query(`SELECT * FROM flights WHERE id = $1`, [id])
    return result.rows[0]   
}

export const travelRepository = { createTravel, readPasseger, readFlight };