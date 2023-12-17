const router = require("express").Router();
const Exercise = require("../models/Exercise");

router.post("/addExercise", async(req,res)=>{
    try{
        const newExercise = new Exercise({
            name:req.body.name,
            category: req.body.category,
            description:req.body.description
        });

        const exercise = await newExercise.save();
        res.status(200).json(exercise);
    }catch(err){
        res.status(500).json(err);
    }
});


// get exercise
router.get("/exercise", async(req,res)=>{
    try{
        const post = await Exercise.find({});
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;