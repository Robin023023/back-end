const UserBlood=require("../model/userBlood")

const allBloodUser=async(req,res)=>{
    try {
        const blood=await UserBlood.find();
        res.status(200).json(blood)
    }  catch (error) {
        res.status(404).json(error.message)
    }
}

const UpdateBloodUser=async(req,res)=>{
    try {
        const blood=await UserBlood.findOne({
            id:req.params._id
        })
        res.status(200).send({
            success:true,
            message:"update single man",
            data:blood
        })
        
    } catch (error) {
        res.status(404).send(error.message)
    }
   
}

const deleteBloodUser=async(req,res)=>{
    try {
        const blood=await UserBlood.deleteOne({
            id:req.params._id
        })
        res.status(200).send({
            success:true,
            message:"deleted single man",
            data:blood
        })
        
    } catch (error) {
        res.status(404).send(error.message)
    }
   
}

const createBloodUser=async(req,res)=>{
    try {
       const blood=new UserBlood({
        name:req.body.name,
        zila:req.body.zila,
        upazila:req.body.upazila,
        blood:req.body.blood,
        file: req.file.filename,
        mobile:req.body.mobile
       }) 

       await blood.save()
       res.status(200).json(blood)

    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports={allBloodUser,createBloodUser,UpdateBloodUser,deleteBloodUser}