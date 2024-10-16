import { registerUserValidator } from "../validators/user.js";
import { UserModel } from "../models/user.js";
import bcrypt from "bcryptjs"; 
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
        // value.password = hashedPassword; this is called mutation of the value joi provided
        await UserModel.create({

            // name:value.name,
            //  email:value.email,
            ...value,
            password: hashedPassword /*this is the prefered code */
        });
        // send userConfirmation email
        // Respond to the request
        res.json('User registerd!');
    } catch (error) {
        next(error)
    }

}

export const loginUser = (req, res, next) => {
    res.json('User Logged In');
}

export const logoutUser = (req, res, next) => {
    res.json('User Logged Out');
}

export const updateProfile = (req, res, next) => {
    res.json('user profile updated')
}