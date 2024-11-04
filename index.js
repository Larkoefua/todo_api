import express from 'express';
import mongoose from 'mongoose';
import todoRouter from './routes/todo.js';
import userRouter from './routes/user.js';
import cors from 'cors';

// connect to database
await mongoose.connect(process.env.MONGO_URI); /*always remember to name the database with the name of your app, that after the .net(slash) bit before the ? */

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

// app.get('/goodbye',(req, res, next) =>{
//     console.log(req.query)
//     res.json('All the best!')
// })


// use middlewares
app.use(cors());
app.use(express.json());

// use routes(this is what we use now)
app.use(todoRouter);
app.use(userRouter);

// app.use(todoRouter, userRouter)  this can be done or it can be repeated like the above
// Listen for incoming requests
// app.listen(3000, function () {
//     console.log('App is listening on port 3000')
// });

app.listen(3000, () => {
    console.log('App is listening on port 3000');
});