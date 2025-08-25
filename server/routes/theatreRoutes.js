const router =require('express').Router();
const Theatre=require('../models/theatreModel');

router.post('/add-theatre',async(req,res)=>{
    try{
        const newTheatre=new Theatre(req.body);
        await newTheatre.save();
        res.send({
            success:true,
            message:'New Thetre has been added !'
        })
    }catch(error){
        res.send({
            success:false,
            message:error.message
        })
    }
})
router.get('/get-all-theatres',async(req,res)=>{
    try{
        const allTheatres= await Theatre.find().populate('owner');
        res.send({
            success:true,
            message:'all Theatres data !',
            data:allTheatres
        })
    }catch(error){
        res.send({
            success:false,
            message:error.message
        })
    }
})
router.delete('/delete-theatres',async(req,res)=>{
    try{
         await Theatre.findByIdAndDelete(req.body.theatreId);
        res.send({
            success:true,
            message:'The theatre has been deleted',
        })
    }catch(error){
        res.send({
            success:false,
            message:error.message
        })
    }
})
router.put('/update-theatres',async(req,res)=>{
    try{
         await Theatre.findByIdAndUpdate(req.body.theatreId,req.body);
        res.send({
            success:true,
            message:'Theatre has been updated',
        })
    }catch(error){
        res.send({
            success:false,
            message:error.message
        })
    }
})
router.get('/get-all-theatres-by-owner',async(req,res)=>{
    try{
        const allTheatres= await Theatre.find({owner:req.body.owner}).populate('owner');
        res.send({
            success:true,
            message:'all Theatres data !',
            data:allTheatres
        })
    }catch(error){
        res.send({
            success:false,
            message:error.message
        })
    }
})
module.exports=router;