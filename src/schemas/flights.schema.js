import JoiBase from "joi";
import JoiDate from "@joi/date";

const Joi = JoiBase.extend(JoiDate);

export const flightSchema = Joi.object({
    origin: Joi.number().integer().positive().required(),
    destination: Joi.number().integer().positive().required(),
    date: Joi.date().format("DD-MM-YYYY").required(),
});