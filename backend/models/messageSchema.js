import mongoose from "mongoose";
import validator from "validator";

const messageSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength:[3,"FirstName contain atleast 3 character"]
    },
    lastName:{
        type:String,
        required:true,
        minLength:[3,"LastName contain atlest 3 character"]
    },
    email:{
        type:String,
        required:true,
        validator:[validator.isEmail,"Please provide valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLength:[11,"Please provide valid phone number"],
        maxLength:[11,"Please provide valid phone number"]
    },
    message:{
        type:String,
        required:true,
        minLength:[10,"Message at least contain 10 character"]
    },    

});

export const Message=mongoose.model("Message",messageSchema);