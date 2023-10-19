import { Request, Response } from "express";
import ServiceModel from "../models/servicesModel";

export const getAllServices = async (req: Request, res: Response) => {
  try {
    const services = await ServiceModel.find();
    res.status(200).json(services);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getServiceById = async (req: Request, res: Response) => {
  try {
    const serviceId = req.params.id;
    const service = await ServiceModel.findById(serviceId);

    if (service) {
      res.status(200).json(service);
    } else {
      res.status(404).json({ error: "Service not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getServiceByTitle = async (req: Request, res: Response) => {
    try {
      const service_title = req.params.title;
      const service = await ServiceModel.findOne({ service_title: service_title });
  
      if (service) {
        res.status(200).json(service);
      } else {
        res.status(404).json({ error: "Service not found" });
      }
    } catch (err) {
      res.status(500).json({ error: "Internal server error" });
      console.log(err);
    }
  };
  