const router = require("express").Router();
const Schedule = require("../models/Schedule");
const User = require("../models/User");

// post schedule
router.post("/createSchedule", async (req, res) => {
try{
    const userId = req.body.userid;

    const user = User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

    
    const newSchedule = new Schedule({
        user: userId,
        day: req.body.day,
        exercises: req.body.exercises,
    });

    const savedSchedule = await newSchedule.save();
    res.status(200).json(savedSchedule);

    }
catch(err){
    res.status(500).json(err);
}
});

// getschedule
router.get("/schedule", async(req,res)=>{
    try{
        const userId = req.body.userid;

        const user = User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
          }

        const schedule = await Schedule.find({});
        res.status(200).json(schedule);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;