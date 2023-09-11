import { travelService } from "../services/travel.services.js";

async function createTravel(req, res, next) {
    const { passengerId, flightId } = req.body;
    await travelService.createTravel({ passengerId, flightId });

    res.sendStatus(201);
}

export const travelController = { createTravel };