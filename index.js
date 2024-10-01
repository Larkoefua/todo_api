import express from 'express';
import todoRouter from './routes/todo.js';

// create an express app
const app = express();


// Define routes

// app.get('/hello', function (req, res, next) {

//     console.log(req.headers);
//     res.json('You visited the hello endpoint!');

// });

// function sum(a,b) {
//     return a+b;
// }

// const sum = (a,b) => {
//     return a+b;
// }

// app.get('/hello',  (req, res, next) => {

//     console.log(req.headers);
//     res.json('You visited the hello endpoint!');

// });



// app.get('/goodbye', function(req, res, next){
//     console.log(req.query)
//     res.json('All the best!')
// })

app.get('/goodbye',(req, res, next) =>{
    console.log(req.query)
    res.json('All the best!')
})

// use routes(this is what we use now)

app.use(todoRouter);
// Listen for incoming requests
// app.listen(3000, function () {
//     console.log('App is listening on port 3000')
// });

app.listen(3000, () => {
    console.log('App is listening on port 3000')
});