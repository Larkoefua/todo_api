import {TodoModel} from "../models/todo.js";

export const addTodo =async (req, res, next) => {
   try {
     // check if user is logged in
     // validate user input(1)
     // write todo to database(2)
    //  console.log(req.body);
     await TodoModel.create(req.body);
     // send them an email notification()
     // send back response or respond to request(final)
    res.status(201).json('Todo was added');
   } catch (error) {
    next(error);
   }
}

// export function addTodo(req, res, next){
//     res.json('Todo was added');
// }

export const getTodos =async (req, res, next) => {
   try {
    // fetch todos from database
    const todos = await TodoModel.find();
    // return response
     res.status(200).json(todos);
   } catch (error) {
    next(error);
   }
}

export const updateTodo =(req, res, next) => {
    res.json('Todo Update');
}

export const deleteTodo =(req, res, next) => {
    res.json('Todo Deleted'); //name export, importing it would need a named import
}