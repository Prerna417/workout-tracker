const router = require("express").Router();
const Schedule = require("../models/Schedule");
const User = require("../models/User");


// get all routines
router.get("/Allschedules", async (req, res) => {
    try {
      const schedules = await Schedule.find({}).populate('user');
  
      // Assuming your User model has a 'username' field
      const schedulesWithUsername = schedules.map(schedule => {
        const username = schedule.user ? schedule.user.username : 'Unknown';
        return {
          day: schedule.day,
          exercises: schedule.exercises,
          username: username
        };
      });
  
      res.status(200).json(schedulesWithUsername);
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json(err);
    }
  });
  

module.exports = router;

// search for a particular user
router.get("/:username",async(req,res)=>{
    try{
        const username = req.params.username;

        const user = await User.findOne({username});
        if(!user){
            return res.status(404).json("user not found!");
        }

        const schedule = await Schedule.find({ user: user._id });
        return res.status(200).json({schedule});
    }catch(err){
        return res.status(500).json(err);
    }
})