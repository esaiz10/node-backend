//init
const express = require ('express');
const cors = require ("cors");
const app = express ();
//middleware
app.use(cors());



//routes
app.get("/api/message", (req, res) => {
    res.json({message:"Hi my name is Ernesto"});
});
//npm init -y
//run
const PORT = 3000;
app.listen(PORT, () => {
    console.log("Backend server is running on " + PORT);
});



