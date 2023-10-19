"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// proper
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const auth_1 = require("../Auth/auth");
const router = express_1.default.Router();
router.post('/register', userController_1.validateUserInput, userController_1.registerUser);
router.post('/login', userController_1.validateUserInput, userController_1.loginUser);
router.post('/refresh', auth_1.verifyAccessToken, userController_1.validateUserInput, userController_1.refreshToken);
exports.default = router;
