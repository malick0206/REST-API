const User= require('../Models/user');

const newUser = async(req, res) => {
    try {
        const {name, email, password} = req.body; 
        const user = new User({name, email, password});
        const savedUser = await user.save();
        res.json(savedUser)
    } catch (error) {
        res.status(500).json({error:'erreur serveur interne'})
        
    }
}

const getUser = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
        
    } catch (error) {
        res.status(500).json({error: 'erreur server interne'})
    }
}

module.exports={
    newUser,
    getUser
}