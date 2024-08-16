import jwt from 'jsonwebtoken';



export const checkUser = (req, res, next ) => {
    const token = req.headers.authorization;

    if(!token) return res.status(401).json({message: 'you are not authorized'});

    const decode = jwt.decode(token, 'secret');
    if(!decode) return res.status(401).json({message: 'you are not authorized'});

    req.userId = decode.id; 
    req.isAdmin = decode.isAdmin;
    next();
}



export const adminCheck = (req, res, next ) => {
    console.log(req.isAdmin);
    console.log(req.userId);
   if(!req.isAdmin) return res.status(401).json({message: 'you are not authorized'});
    
    next();
}