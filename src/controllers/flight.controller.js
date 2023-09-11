import { flightService } from "../services/flight.services.js";

async function createFlight(req, res) {
    const { origin, destination, date } = req.body;
    await flightService.createFlight({ origin, destination, date });

    res.sendStatus(201);
}

export const flightController = { createFlight };