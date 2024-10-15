import Joi from "joi";

export const addTodoValidator = Joi.object({
  title: Joi.string().required(),
  icon: Joi.string().required()
  // completed: Joi.Boolean, default:false
});

export const updateTodoValidator = Joi.object({
  title: Joi.string(),
  icon: Joi.string(),
  completed: Joi.boolean()
});
