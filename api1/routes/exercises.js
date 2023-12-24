const router = require("express").Router();
const Exercise = require("../models/Exercise");

router.post("/addExercise", async(req,res)=>{
    try{
        const newExercise = new Exercise({
            name:req.body.name,
            category: req.body.category,
            description:req.body.description,
            imageUrl:req.body.imageUrl,
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

// get exercise based on category
router.get("/:category", async (req, res) => {
    try {
        const category = req.params.category;

        const exercises = await Exercise.find({ category: category });
        if (exercises.length === 0) {
            return res.status(404).json("Exercises not found for the specified category.");
        }

        return res.status(200).json({ exercises });
    } catch (err) {
        return res.status(500).json(err);
    }
});
