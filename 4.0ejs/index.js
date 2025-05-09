import express from "express";

const app = express();

const port = 3000;

app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();
    var day_c;
    var resp;
    console.log(day);
    if(day==0 || day==6){
        day_c= "weekend";
        resp = "time to enjoy";
    }
    else{
        day_c= "weekday";
        resp= "time to work";
    }
    res.render("index.ejs", { day: day_c , response: resp});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});