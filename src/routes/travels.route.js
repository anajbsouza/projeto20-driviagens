import { Router } from "express";
import { travelController } from "../controllers/travel.controller.js";
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { travelSchema } from "../schemas/travels.schema.js";

const travelRouter = Router();

travelRouter.post("/travels", validateSchema(travelSchema), travelController.createTravel);    

export default travelRouter;