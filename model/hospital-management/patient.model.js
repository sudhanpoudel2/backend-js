import mongose from "mongoose";

const patirntSchema = new mongose.Schema({
    name : {
        type : String,
        required : true
    },
    diagonsedWith : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    blood : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        enum : [ "M","F","O"],
        required : true
    },
    admitIn : {
        type : mongoose.Schema.Type.ObjectId,
        ref : "Hospital"
    }
},{timestamps:true});

export const Patient = mongose.model("Patient",patirntSchema);
