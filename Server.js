const express=require("express");

var knex = require('knex')({
    client: 'sqlite3',
    connection: {
      filename:'/home/rishabh/Documents/Node.js/Database/mydatabase.sqlite';
    
    }
  });

const app=express();

app.get('/',(req,res)=>{
 res.send('Root Directory');
})
app.listen(3000,()=>{
    console.log("Server has started");

}
);

