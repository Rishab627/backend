

export const getAllUsers = (req, res) => {
    return res.status(200).json({data: 'all users'});
}


export const loginUser = (req, res) => {
    console.log(req.body);
    return res.status(200).json({});
}