const jwt = require('jsonwebtoken')

const authenticationMiddleware = (req,res,next)=>{
    console.log("Inside authenticationMiddleware" );
    const token =  req.headers['authorization'].split(" ")[1]
    if(token){
        try{
            const jwtResponse = jwt.verify(token,process.env.JWT_SECRET)
            req.payload = jwtResponse.userMail
            req.role = jwtResponse.role
            next()
        }catch(err){
            console.log(err);
            res.status(404).json("Authorisaton failed!!! Invalid Token...")
        }
    }else{
        res.status(404).json("Authorisaton failed!!! Token is Missing...")
    }
}

module.exports = authenticationMiddleware