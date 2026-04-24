"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CommissionController_1 = require("../presentation/controllers/CommissionController");
const router = (0, express_1.Router)();
const controller = new CommissionController_1.CommissionController();
router.post("/calculate", controller.calculate);
exports.default = router;
