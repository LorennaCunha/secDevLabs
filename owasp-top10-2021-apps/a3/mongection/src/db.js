const User = require('./models/user');

const register = async (user) => {

    try { 
        const { name, email, password } = user;
        const sanitizedName = String(name);
        const sanitizedEmail = String(email);
        const sanitizedPassword = String(password);

        const existUser = await User.findOne({email: sanitizedEmail});

        if(existUser) { return null }

        const newUser = new User({
            name: sanitizedName,
            email: sanitizedEmail,
            password: sanitizedPassword
        });

        await newUser.save();

        return newUser;
    }

    catch(error) { throw error; }
    
}

const login = async (credentials) => {

    try {
        const { email, password } = credentials;

        const existsUser = await User.find({$and: [ { email: sanitizedEmail}, { password: sanitizedPassword} ]});

        if(!existsUser) { return null;}

        const returnUser = existsUser.map((user) => {
            return null;
        })


        return returnUser;
    }
    
    catch(error) { throw error; }
    

}

module.exports = {
    register,
    login
};