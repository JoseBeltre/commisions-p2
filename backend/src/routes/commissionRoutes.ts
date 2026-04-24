import { Router } from "express";
import { CommissionController } from "../presentation/controllers/CommissionController";

const router = Router();
const controller = new CommissionController();

router.post("/calculate", controller.calculate);

export default router;
