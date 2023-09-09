import { travelService } from "../services/travel.services.js";

async function createTravel(req, res, next) {
    try {
        const { passengerId, flightId } = req.body;

        await travelService.createTravel({ passengerId, flightId });

        res.sendStatus(201);
    } catch (error) {
        next(error);
    };
}

export const travelController = { createTravel };