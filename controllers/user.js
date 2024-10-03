// register, log in , log out

// An export function
export const register = (req, res, next) => {
    res.json('User Registerd');
}

export const login = (req, res, next) => {
    res.json('User Logged In');
}

export const logout = (req, res, next) => {
    res.json('User Logged Out');
}