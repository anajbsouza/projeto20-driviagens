import { Router } from "express";
import { flightController } from "../controllers/flight.controller.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { flightSchema } from "../schemas/flights.schema.js";

const flightsRouter = Router();

flightsRouter.post("/flights", validateSchema(flightSchema), flightController.createFlight);

export default flightsRouter;