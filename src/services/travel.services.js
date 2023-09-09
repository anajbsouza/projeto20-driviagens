import { travelRepository } from "../repositories/travel.repository.js";

async function createTravel({ passengerId, flightId }) {

    //blablabla
    await travelRepository.createTravel({ passengerId, flightId });
};

export const travelService = { createTravel };