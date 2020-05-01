const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

// @route GET api/profile
// @desc current users profile
// @access Private    




router.get('/',auth,async (req,res)=>{
    try{
        const profile = await (await Profile.findById({user:req.user.id}))
        .populate('user',['name','avatar']);
        if(!profile){
            return res.status(400).json({
                msg:'There is no profile for this user'
            })
        }
        res.json('profile');
    }catch(e){
        console.log(err.message);
        res.status(500).send('Server error');
    }
    
})



module.exports= router;