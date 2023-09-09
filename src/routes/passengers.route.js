import { Router } from "express";
import { passengerController } from "../controllers/passenger.controller.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { passengerSchema } from "../schemas/passengers.schema.js";

const passengersRouter = Router();

passengersRouter.post("/passengers", validateSchema(passengerSchema), passengerController.createPassenger);
passengersRouter.get("/passengers/travels");

export default passengersRouter;