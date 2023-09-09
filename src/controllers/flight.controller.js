import { flightService } from "../services/flight.services.js";

async function createFlight(req, res) {
    try {
        const { origin, destination, date } = req.body;

        if (!origin || !destination || !date) {
            return res.sendStatus(400);
        }

        await flightService.createFlight({ origin, destination, date });

        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

export const flightController = { createFlight };