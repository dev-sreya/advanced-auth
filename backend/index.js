import express from "express";


const app = express();

app.get("/", (req, res) => {
    res.send("hello World it's ME 321");
})

app.listen(3000, () => {
    console.log("Server is running on ort 3000");
});