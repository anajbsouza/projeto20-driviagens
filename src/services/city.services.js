import { conflictError } from "../errors/errors.js";
import { cityRepository } from "../repositories/cities.repository.js";  

async function createCity({name}) {

    const existingCity = await cityRepository.readCity({name});
    if(existingCity) throw conflictError("Cidade");

    await cityRepository.createCity({name});
};

export const cityService = { createCity };