import { request } from "express";
import { TodoModel } from "../models/todo.js";
import {addTodoValidator, updateTodoValidator} from "../validators/todo.js";

export const addTodo = async (req, res, next) => {
  try {
    // console.log(req.file);
    // check if user is logged in
    // validate user input(1)
    const { error, value } = addTodoValidator.validate({
      ...req.body,
      icon: req.file?.filename /*this is how to receive the url */
    });
    if (error) {
      return res.status(422).json(error);
    }
    // write todo to database(2)
    //  console.log(req.body);
    await TodoModel.create(
      value
    ); /*this line which is the .create is a  static method*/
    //   const todo = new TodoModel(req.body); This is the same as whats on line 11
    //  await todo.save(); his is the same as whats on line 11/ add to whats on line 12/ this line which is the save is the instant method
    // send them an email notification()
    // send back response or respond to request(final)

    res.status(201).json("Todo was added");
  } catch (error) {
    next(error);
  }
};

// export function addTodo(req, res, next){
//     res.json('Todo was added');
// }

export const getTodos = async (req, res, next) => {
  try {
    // console.log(req.query);

    // const {filter= "{}"} = req.query; initial one

    const { filter = "{}", sort= "{}", limit = 10, skip = 0 } = req.query;
    // fetch todos from database
    const todos = await TodoModel
      .find(JSON.parse(filter))
      .sort(JSON.parse(sort))
      .limit(limit)
      .skip(skip);
    // return response
    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
};

export const countTodos = async (req, res, next) => {

 try {
   const {filter= "{}"} = req.query
   // Count todo in database
   const count = await TodoModel.countDocuments(JSON.parse(filter));
   // Respond to request
   res.json({count});
 } catch (error) {
  next (error);
 }
}

export const getTodo = async(req,res,next)=>{
 try {
   const {id} = req.params;
  //  Get todo by id from database
  const todo = await TodoModel.findById(id);
  // REspond to request
  res.json(todo);
 } catch (error) {
  next(error);
 }
}

export const updateTodo = (req, res, next) => {
  res.json("Todo Update");
};

export const deleteTodo = (req, res, next) => {
  res.json("Todo Deleted"); //name export, importing it would need a named import
};

// const filter ={"title":{"$regex":`${searchTerm}`,"$options":"i"}} - this is how the frontends would search