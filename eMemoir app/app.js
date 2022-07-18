const express= require("express")
const mongoose= require("mongoose")
const app= express()


//connect to mongodb
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true, 
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 40000,
    family: 4
  };
const connection_url = "mongodb+srv://mohit:123123123@cluster0.qdm6j.mongodb.net/?retryWrites=true&w=majority";
mongoose.Promise = global.Promise;
mongoose.connect(connection_url, options).then(() => {
    console.log('Connected to database successfully');
})
.catch(error => console.error('Could not connect to database', error));


//middlewares
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))
app.set("view engine", "ejs")


//routes

app.use(require("./routes/index"))
app.use(require("./routes/compose"))
app.use(require("./routes/memo"))

//server configurations

app.listen(3000,()=> console.log("server started at port 3000 "))