import dayjs from "dayjs";
import { flightService } from "../services/flight.services.js";

async function createFlight(req, res) {
    try {
        const { origin, destination, date } = req.body;

        if (!origin || !destination || !date) {
            return res.sendStatus(400);
        }

        if (!dayjs(date, "DD-MM-YYYY").isValid()) {
            return res.status(422).send({ error: 'Formato de data inválido. Use o formato dd-mm-aaaa.' });
        }

        if (origin === destination) {
            return res.status(409).send({ error: 'Origem e destino não podem ser iguais.' });
        }

        const currentDate = dayjs();
        const flightDate = dayjs(date, "DD-MM-YYYY");
        if (flightDate.isBefore(currentDate)) {
            return res.status(422).send({ error: 'A data do voo deve ser maior do que a data atual.' });
        }

        await flightService.createFlight({ origin, destination, date });

        res.sendStatus(201);
    } catch (err) {
        console.error(err);
        res.status(500).send({ error: 'Erro interno do servidor.' });
    }
}

export const flightController = { createFlight };
