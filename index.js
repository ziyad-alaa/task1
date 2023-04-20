import express from 'express';

const app = express();

const students = ["ahmad", "yasser", "medhat","fayez",];

const studentfunction = (req,res)  => {
    //console.log("ahhh");
    
    let output = "<ul>";
    
    for( let i = 0 ; i < students.length ; i++){
       

      output += "<li>" + students[i] + "</li>";

    }
 

    output += "</ul>";

    res.send( "<h1>students</h1>" +output);
};

app.get("/students" , studentfunction);
app.listen(5000);