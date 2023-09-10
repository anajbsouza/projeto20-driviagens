import { Router } from "express";
import { cityController } from "../controllers/city.controller.js"; 
import validateSchema from "../middlewares/validateSchema.middleware.js";
import { citySchema } from "../schemas/cities.schema.js";

const citiesRouter = Router();

citiesRouter.post("/cities", validateSchema(citySchema), cityController.createCity);    

export default citiesRouter;