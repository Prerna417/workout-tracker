const router = require("express").Router();
const Schedule = require("../models/Schedule");
const User = require("../models/User");
const bcrypt = require('bcrypt');

// update
router.put("/:id", async (req, res) => {
    if(req.body.userId === req.params.id){
        if(req.body.password){
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password,salt);
        }
        try{
        const updateduser = await User.findByIdAndUpdate(req.params.id,{
            $set:req.body,
        });
        res.status(200).json(updateduser);
        }catch(err){
        res.status(500).json(err)
        }
    }
    else{
        res.status(401).json("you can update only your account");
    }
})

// delete
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                await Schedule.deleteMany({ user: user._id });
                await User.findByIdAndDelete(req.params.id)
                return res.status(200).json("User has been deleted...");

            } catch (err) {
                return res.status(500).json(err)
            }
        } catch (err) {
            res.status(404).json("user not found!")
        }

    } else {
        return res.status(401).json("you can delete only your account")
    }
    
    
})

module.exports = router