"use strict";
// import * as Mongoose from "mongoose";
// require('dotenv').config()
// let database: Mongoose.Connection;
// export const connect = () => {
//     const url = process.env.MONGO;
//     console.log("from connect: process.env.MONGO :::",process.env.MONGO)
//     if (database) {
//         return;
//     }
//     Mongoose.connect(url as string);
//     database = Mongoose.connection;
//     database.once("open", async () => {
//         console.log("Connected to database");
//     });
//     database.on("error", () => {
//         console.log("Error connecting to database");
//     });
// };
// export const disconnect = () => {
//     if (!database) {
//       return;
//     }
//     Mongoose.disconnect();
//     database.once("close", async () => {
//         console.log("Diconnected  to database");
//     });
// };
