import { flightRepository } from "../repositories/flight.repository.js";    

async function createFlight({ origin, destination, date }) {
    await flightRepository.createFlight({ origin, destination, date });
}

export const flightService = { createFlight };