import { cityRepository } from "../repositories/cities.repository.js";  

async function createCity({ name }) {

    //blablabla
    await cityRepository.createCity({ name });
};

export const cityService = { createCity };