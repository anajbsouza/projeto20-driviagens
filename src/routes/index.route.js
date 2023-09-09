import { Router } from "express";
import passengersRouter from "./passengers.route.js";

const router = Router();

router.use(passengersRouter);
router.use();
router.use();

export default router;