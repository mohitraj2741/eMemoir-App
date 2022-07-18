const router= require("express").Router();
const Memo= require("../models/Memoir");

router.get("/memo/:id", async(req,res) =>{

    const {id} = req.params;

    const getMemo= await Memo.findOne({_id: id});

    res.render("particularMemo", {memo: getMemo});


})

.get("/delete/:id", (req,res) =>{
    const{id} = req.params;
    Memo.deleteOne({_id: id})
    .then(()=>{
        console.log("Memo deleted successfully!");
        res.redirect("/");
    }).catch((err) => console.log(err));

})

.get("/edit/:id", async(req,res)=>{
    const{id}= req.params;

    const getData= await Memo.findOne({_id:id});
    res.render("editMemo",{memo: getData});


})
.post("/edit/:id", async(req,res)=>{
    const {title, content}= req.body;
    const{id}= req.params;

    Memo.updateOne({_id: id}, {title:title,content:content})
    .then(()=>{
        console.log("Memoir updated Successfully!")
        res.redirect("/");
    }).catch((err)=>console.log(err));

})


module.exports= router;