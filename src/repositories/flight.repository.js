import { db } from "../database/database.connection.js";

async function createFlight({ origin, destination, date }) {
    try {
        // Verifique se a cidade de origem existe na tabela cities
        const originExists = await cityExists(origin);
        if (!originExists) {
            throw new Error('Cidade de origem não encontrada.');
        }

        // Verifique se a cidade de destino existe na tabela cities
        const destinationExists = await cityExists(destination);
        if (!destinationExists) {
            throw new Error('Cidade de destino não encontrada.');
        }

        // Verifique se origem e destino são diferentes
        if (origin === destination) {
            throw new Error('Origem e destino não podem ser iguais.');
        }

        // Verifique se a data do voo é maior do que a data atual
        const currentDate = new Date();
        const flightDate = new Date(date);
        if (flightDate <= currentDate) {
            throw new Error('A data do voo deve ser maior do que a data atual.');
        }

        // Insira o voo no banco de dados
        const result = await db.query(
            `INSERT INTO flights (origin, destination, date) VALUES ($1, $2, $3);`,
            [origin, destination, date]
        );

        return result;
    } catch (error) {
        throw error;
    }
}

async function cityExists(cityId) {
    const result = await db.query('SELECT COUNT(*) FROM cities WHERE id = $1', [cityId]);
    return result.rows[0].count > 0;
}

export const flightRepository = { createFlight };
