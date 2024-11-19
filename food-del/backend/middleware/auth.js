import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    console.log('hello shmaeh')
    const { token } = req.headers;
    console.log("token",token)
    if (!token) {
        return res.json({success:false,message:'Not Authorized Login Again'});
    }
    console.log(process.env.JWT_SECRET)
    try {
        const token_decode =   jwt.verify(token, process.env.JWT_SECRET);
        req.body.userId = token_decode.id;
        console.log();
        next();
    } catch (error) {
        // console.log("shamsher errror", error)
        return res.json({success:false,message:error.message});
    }
}

export default authMiddleware;