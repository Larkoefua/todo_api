import {Schema, model} from "mongoose"

const todoSchema= new Schema({
    title: {type: String, required: true},
    completed:{type: Boolean, default: false}
});/* a new Schema acts as a template for todo only*/

export const TodoModel = model('Todo', todoSchema);