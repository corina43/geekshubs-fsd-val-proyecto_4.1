const isAdmin = (req,res,next) => {

    try {
        // const superAdmin = process.env.SUPERADMIN;
        // const admin = process.env.ADMIN;
        // console.log(admin);
        const userAdmin = req.roleId
console.log("---------------------}")      
console.log(userAdmin)
console.log("---------------------}")   
        if( userAdmin == "2"){
            return next();
        };
        
        return res.status(505).json(
            { 
                succes: false,
                message: 'You shall not pass!!. You are not powerfull enough to walk through this barrier.' 
            }
        );

    } catch (error) {
        return res.status(500).json(
            {
                succes: false,
                message: "Something went wrong.",
                error: error.message
            }
        );
    };
};

module.exports = isAdmin;