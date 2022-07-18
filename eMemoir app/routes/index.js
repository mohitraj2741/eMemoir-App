const router = require("express").Router()
const Memo= require("../models/Memoir")

router.get("/", async(req,res) =>{

    const allMemos= await Memo.find();
    // console.log(allBlogs);

    res.render("index", { memos : allMemos});
});

module.exports = router;
