import { travelService } from "../services/travel.services.js";

async function createTravel(req, res, next) {
    try {
        const { passengerId, flightId } = req.body;

        await travelService.createTravel({ passengerId, flightId });

        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.status(422).send(err.message);
    }
}

export const travelController = { createTravel };