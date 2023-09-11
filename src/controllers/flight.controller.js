import { flightService } from "../services/flight.services.js";

async function createFlight(req, res) {
    const { origin, destination, date } = req.body;
    try {
        await flightService.createFlight({ origin, destination, date });
        res.sendStatus(201);
    } catch (error) {
        console.error(error);
        res.status(422).send(error.message); // Ou o status code apropriado
    }
}

export const flightController = { createFlight };
