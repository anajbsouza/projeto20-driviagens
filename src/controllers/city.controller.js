import { cityService } from "../services/city.services.js";

async function createCity(req, res) {
    try {
        const { name } = req.body;

        if (!name) {
            return res.sendStatus(400);
        }

        await cityService.createCity({ name });

        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
}

export const cityController = { createCity };