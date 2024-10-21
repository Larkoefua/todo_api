import { Router } from "express";
import {
  addTodo,
  countTodos,
  deleteTodo,
  getTodo,
  getTodos,
  updateTodo,
} from "../controllers/todo.js";
import { /*localUpload, remoteUpload*/ todoIconUpload } from "../middlewares/upload.js";

// create a router
const todoRouter = Router();

// Define Route
todoRouter.post("/todos", /*localUpload remoteUpload*/todoIconUpload.single("icon"), addTodo);

todoRouter.get("/todos", getTodos);

todoRouter.get("/todos/count", countTodos);/*the count comes first or make it come before the post */

todoRouter.get("/todos/:id", getTodo );

todoRouter.patch("/todos/:id", updateTodo);

todoRouter.delete("/todos/:id", deleteTodo);

// Export router
export default todoRouter;
