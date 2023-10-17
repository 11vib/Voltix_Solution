"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getServiceByTitle = exports.getServiceById = exports.getAllServices = void 0;
const servicesModel_1 = __importDefault(require("../models/servicesModel"));
const getAllServices = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const services = yield servicesModel_1.default.find();
        res.status(200).json(services);
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getAllServices = getAllServices;
const getServiceById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceId = req.params.id;
        const service = yield servicesModel_1.default.findById(serviceId);
        if (service) {
            res.status(200).json(service);
        }
        else {
            res.status(404).json({ error: "Service not found" });
        }
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.getServiceById = getServiceById;
const getServiceByTitle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const service_title = req.params.title;
        const service = yield servicesModel_1.default.findOne({ service_title: service_title });
        if (service) {
            res.status(200).json(service);
        }
        else {
            res.status(404).json({ error: "Service not found" });
        }
    }
    catch (err) {
        res.status(500).json({ error: "Internal server error" });
        console.log(err);
    }
});
exports.getServiceByTitle = getServiceByTitle;
