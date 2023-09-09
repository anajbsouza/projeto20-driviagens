import { passengerRepository } from "../repositories/passenger.repository.js";

async function createPassenger({ firstName, lastName }) {

    //blablabla
    await passengerRepository.createPassenger({ firstName, lastName });
};

export const passengerService = { createPassenger };