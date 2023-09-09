import { Router } from "express";
import { flightController } from "../controllers/flight.controller.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { travelSchema } from "../schemas/travels.schema.js";

const flightRouter = Router();

flightRouter.post("/travels", validateSchema(travelSchema) ,flightController.createFlight);    

export default flightRouter;