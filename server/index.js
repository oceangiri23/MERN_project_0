const express = require("express")
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json()); // web ya postman bata ako data json format ma change huncha 
const userRouter = require("./routes/userRoutes")




mongoose.connect(process.env.URI)
.then(()=>{
    console.log("connected to database");
})
.catch((error) => {
console.log("error", error);
});


app.use(userRouter);
// app.use("/api/user", userRoutes);
// user le link/api/user handa auna ko lagi



app.listen(process.env.PORT || 4000, (err) =>{
    if (err) console.log(err);
    console.log("running in port"+ process.env.PORT);
}) ;