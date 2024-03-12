import express from "express";
import { create, deleteTask, fetch, update } from "../controller/userController.js";

const route = express.Router();

route.get("/getalldata", fetch)
route.post("/create", create)
route.put("/update/:id", update)
route.delete("/delete/:id", deleteTask)

export default route;