import { flightRepository } from "../repositories/flight.repository.js";
import { cityRepository } from "../repositories/cities.repository.js";
import{ conflictError, incompleteDataError, invalidIdError, notFoundError } from "../errors/errors.js";
import dayjs from "dayjs";

async function createFlight({ origin, destination, date }) {
    
    console.log('Origin:', origin);
    console.log('Destination:', destination);
    console.log('Date:', date);


    const datePattern = /^\d{2}-\d{2}-\d{4}$/;
    if (!datePattern.test(date) || !dayjs(date, "DD-MM-YYYY").isValid()) {
        throw invalidIdError(' Use o formato dd-mm-aaaa.');
    }

    const formattedDate = dayjs(date, "DD-MM-YYYY").format("YYYY-MM-DD");

    const originCity = await cityRepository.readCityById(origin);
    if (!originCity) {
        console.error('Cidade de origem não encontrada.');
        throw notFoundError('Cidade de origem ');
    }

    const destinationCity = await cityRepository.readCityById(destination);
    if (!destinationCity) {
        throw notFoundError('Cidade de destino ');
    }

    if (origin === destination) {
        throw conflictError('Origem e destino não podem ser iguais.');
    }

    const currentDate = dayjs();
    const flightDate = dayjs(formattedDate, "YYYY-MM-DD");
    if (flightDate.isBefore(currentDate)) {
        throw invalidIdError('A data do voo deve ser maior do que a data atual.');
    }

    await flightRepository.createFlight({ origin, destination, date: formattedDate });
}

export const flightService = { createFlight };
