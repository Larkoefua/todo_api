// register, log in , log out

// An export function
export const registerUser = (req, res, next) => {
    res.json('User Registerd');
}

export const loginUser = (req, res, next) => {
    res.json('User Logged In');
}

export const logoutUser = (req, res, next) => {
    res.json('User Logged Out');
}

export const updateProfile =(req,res,next) => {
    res.json('user profile updated')
}