import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    }, 
    todo:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        default: 'pending',
    },
})

export default mongoose.model("user",userSchema)