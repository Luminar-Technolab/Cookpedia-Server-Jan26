const jwt = require('jsonwebtoken')

const adminMiddleware = (req,res,next)=>{
    console.log("Inside adminMiddleware" );
    const token =  req.headers['authorization'].split(" ")[1]
    if(token){
        try{
            const jwtResponse = jwt.verify(token,process.env.JWT_SECRET)
            req.payload = jwtResponse.userMail
            if(jwtResponse.role=="admin"){
                req.role = jwtResponse.role
                next()
            }else{
                res.status(404).json("Authorisaton failed!!! Operation Denied...")
            }
        }catch(err){
            console.log(err);
            res.status(404).json("Authorisaton failed!!! Invalid Token...")
        }
    }else{
        res.status(404).json("Authorisaton failed!!! Token is Missing...")
    }
}

module.exports = adminMiddleware