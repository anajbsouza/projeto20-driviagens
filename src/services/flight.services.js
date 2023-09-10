import { flightRepository } from "../repositories/flight.repository.js";

async function createFlight({ origin, destination, date }) {
    try {
        const result = await flightRepository.createFlight({ origin, destination, date });
        return result;
    } catch (error) {
        throw error;
    }
}

export const flightService = { createFlight };
