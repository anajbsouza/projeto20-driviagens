import { cityService } from "../services/city.services.js";

async function createCity(req, res) {
    const { name } = req.body;
    await cityService.createCity({ name });
    
    res.sendStatus(201);
}

export const cityController = { createCity };