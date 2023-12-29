const router = require("express").Router();
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
    
        try{
            await User.findByIdAndDelete(req.params.id);
        res.status(200).json("user has been deleted...");
        }catch(err){
        res.status(500).json(err)
        }
    
    
})

module.exports = router