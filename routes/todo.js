import { Router } from "express";
import {
  addTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todo.js";
import { localUpload, /*remoteUpload*/ todoIconUpload } from "../middlewares/upload.js";

// create a router
const todoRouter = Router();

// Define Route
todoRouter.post("/todos", /*localUpload remoteUpload*/todoIconUpload.single("icon"), addTodo);

todoRouter.get("/todos", getTodos);

todoRouter.patch("/todos/:id", updateTodo);

todoRouter.delete("/todos/:id", deleteTodo);

// Export router
export default todoRouter;
