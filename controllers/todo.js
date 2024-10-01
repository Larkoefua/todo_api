export const addTodo =(req, res, next) => {
    // check if user is logged in
    // validate user input
    // save todo to database
    // send them an email notification
    // send back response
    res.json('Todo was added');
}

// export function addTodo(req, res, next){
//     res.json('Todo was added');
// }

export const getTodos =(req, res, next) => {
    res.json('All todos');
}

export const updateTodo =(req, res, next) => {
    res.json('Todo Update');
}

export const deleteTodo =(req, res, next) => {
    res.json('Todo Deleted'); //name export, importing it would need a named import
}