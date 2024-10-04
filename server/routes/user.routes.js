import express from "express";
import { createUser, getAllUser, getUserById, updateUser, deleteUser } from '../controller/user.controller.js'

const route = express.Router();

route.post("/user", createUser)
route.get("/users", getAllUser)
route.get("/user/:id", getUserById)
route.put("/update/user/:id", updateUser)
route.delete("/delete/user/:id", deleteUser)

export default route;
