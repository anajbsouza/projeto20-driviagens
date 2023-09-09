import Joi from "joi";

export const flightSchema = Joi.object({
    origin: Joi.number().integer().positive().required(),
    destination: Joi.number().integer().positive().required(),
    date: Joi.date().iso().required(),
});