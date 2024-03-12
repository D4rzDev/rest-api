import User from "../model/userModel.js"

//savind data to the mongoDb
export const create = async (req, res) => {
    try {
        const userData = new User(req.body);
        const {name} = userData;
        const userExist = await User.findOne({name})

        if(userExist){
            return res.status(400).json({message: 'User already exist'});
        }
        const savedUser = await userData.save( );
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json({error: "Internal server error."})
    }
}

//Getting all the data from database
export const fetch = async (req, res) => {
    try {
        const user = await User.find();
        if(user.length === 0) {
            return res.status(404).json({message: " There is no todo"})
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error: "Internal server error."})
        
    }
}

//updating data 
export const update = async ( req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id:id})
        if(!userExist) {
            return res.status(400).json({message: "Todo does not exist"})
        }
        const updateUser = await User.findByIdAndUpdate(id,req.body ,{new:true});
        res.status(201).json(updateUser);
    } catch (error) {
        res.status(500).json({error: "Internal server error."})
    }

}

// deleting task
export const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findOne({_id:id})
        if (!userExist){
            return res.status(400).json({ message : 'No Task found' })
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({ message : 'Deleted Successfully' });
    } catch (error) {
        res.status(500).json({error: "Internal server error."})
    }

}