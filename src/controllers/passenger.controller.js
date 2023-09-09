import { passengerService } from "../services/passenger.services.js";

async function createPassenger(req, res) {
    try {
        const { firstName, lastName } = req.body;

        if (!firstName || !lastName ) {
            return res.sendStatus(400);
        }

        await passengerService.createPassenger({ firstName, lastName });

        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
};

export const passengerController = { createPassenger };