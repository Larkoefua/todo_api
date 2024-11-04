import { registerUserValidator, loginUserValidator, updateProfileValidator } from "../validators/user.js";
import { UserModel } from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { mailTransporter } from "../utils/mail.js";
// import { hashSync } from "bcryptjs";

// register, log in , log out

// An export function
export const registerUser = async (req, res, next) => {

    try {
        // validate user input
        const { error, value } = registerUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // check if user does not exist
        const user = await UserModel.findOne({ email: value.email });
        if (user) {
            return res.status(409).json('User already exist');
        }
        // Hash their password
        const hashedPassword = bcrypt.hashSync(value.password, 10);
        // Save the user into database
        await mailTransporter.sendMail({
            to: value.email,
            subject: 'user registration',
            text: 'Account Registered Successfully'
        });
        // value.password = hashedPassword; this is called mutation of the value joi provided
        await UserModel.create({

            // name:value.name,
            //  email:value.email,
            ...value,
            password: hashedPassword /*this is the prefered code */
        });
        // send userConfirmation email
        // Respond to the request
        res.json({
            message:'User registerd!'
        });
    } catch (error) {
        next(error)
    }

}

export const loginUser = async (req, res, next) => {

    try {
        // validate user input
        const { error, value } = loginUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        // Find one user with identifier
        const user = await UserModel.findOne({email:value.email});
        if(!user){
            return res.status(404).json('User does not exist!');
        }
        // compare their passwords
        const correctPassword = bcrypt.compareSync(value.password, user.password);
        if (!correctPassword){
            return res.status(401).json('Invalid Credentials!');
        }

        // Sign a token for  user
        const token = jwt.sign(
            {id:user.id}, 
            process.env.JWT_PRIVATE_KEY,
            {expiresIn:'24h' /* it can be 1d or 1m*/ }
        );

        // Respond to request

        res.json({
            message: 'User Logged In',
            accessToken: token
        });
    } catch (error) {
        next(error);
    }
}

export const getProfile = async (req,res,next) =>{
    try {
        // console.log(req.auth);
        // Find authenticted user from the database
        const user = await UserModel
        // .findById(req.user.id)
        .findById(req.auth.id)
        .select({password: false});
        // Respond to request
        res.json(user);
    } catch (error) {
        next(error);
    }
}
export const logoutUser = (req, res, next) => {
    res.json({
        message:'User Logged Out'
    });
}

export const updateProfile = async (req, res, next) => {
   try {
    // validate user input
    const{error, value} = updateProfileValidator.validate(req.body);
    if (error) {
            return res.status(422).json(error);
        }
        await UserModel.findByIdAndUpdate(value)
     res.json('user profile updated')
   } catch (error) {
    next(error)
   }
}