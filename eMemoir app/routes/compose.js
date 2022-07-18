const router= require("express").Router()

const Memo= require("../models/Memoir")

router

.get("/compose",(req,res) => {
  
    res.render("composeMemo")
})

.post("/compose", (req,res) =>{
    const {title, content}= req.body;

    if(!title || !content)
    return res.send("Please enter all the Fields!")

    const newMemo= new Memo({title: title, content:content})

    newMemo.save().then(()=>{
        console.log("memoir saved")
        res.redirect('/')
    })
    .catch((err)=> console.log(err));
});

module.exports= router;