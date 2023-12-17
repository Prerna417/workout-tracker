const mongoose = require("mongoose");

const ExerciseSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    category:{
        type:String
    },
    description:{
        type:String
    },
    imageUrl:{
        type: String
    }
});

module.exports = mongoose.model("Exercise",ExerciseSchema)