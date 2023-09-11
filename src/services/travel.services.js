import { travelRepository } from "../repositories/travel.repository.js";
import {notFoundError} from "../errors/errors.js";

async function createTravel({ passengerId, flightId }) {

    const existingFlight = await travelRepository.readFlight(flightId);
    const existingPasseger = await travelRepository.readPasseger(passengerId);

    if(!existingFlight) throw notFoundError('Voo não existe')
    if(!existingPasseger) throw notFoundError('Passageiro não existe')

    await travelRepository.createTravel({ passengerId, flightId });
};

export const travelService = { createTravel };