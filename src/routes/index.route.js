import { Router } from "express";
import errorHandler from "../middlewares/error.middleware.js";
import citiesRouter from "./cities.route.js";
import flightsRouter from "./flights.route.js";
import passengersRouter from "./passengers.route.js";
import travelRouter from "./travels.route.js";


const router = Router();

router.use(passengersRouter);
router.use(citiesRouter);
router.use(flightsRouter);
router.use(travelRouter);
router.use(errorHandler);

export default router;