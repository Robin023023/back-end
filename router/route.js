const express=require('express');
const { allBloodUser, createBloodUser, deleteBloodUser, UpdateBloodUser} = require('../controller/controll');
const router=express.Router();
const upload = require('../upload');

router.get("/blood-document",allBloodUser)
router.post("/blood-document",upload.single('file'),createBloodUser)
router.patch("/blood-document/:id",UpdateBloodUser)
router.delete("/blood-document/:id",deleteBloodUser)

module.exports=router