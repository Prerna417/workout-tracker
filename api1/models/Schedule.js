const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
    day:{
        type: String,
        required: true,
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday' , 'Saturday', 'Sunday']
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    exercises: [
        {
          exercise: {
            type: String,
            required: true,
          },
          duration: {
            type: Number,
            required: true,
          },
        },
      ],
});

module.exports = mongoose.model('Schedule',scheduleSchema);