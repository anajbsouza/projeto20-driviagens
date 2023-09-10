import { Router } from "express";
import citiesRouter from "./cities.route.js";
import passengersRouter from "./passengers.route.js";
import travelRouter from "./travels.route.js";
import flightRouter from "./travels.route.js";

const router = Router();

router.use(passengersRouter);
router.use(citiesRouter);
router.use(flightRouter);
router.use(travelRouter);

export default router;