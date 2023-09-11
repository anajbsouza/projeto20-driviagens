import { passengerService } from "../services/passenger.services.js";

async function createPassenger(req, res) {
    const { firstName, lastName } = req.body;
    await passengerService.createPassenger({ firstName, lastName });
    
    res.sendStatus(201);
};

export const passengerController = { createPassenger };