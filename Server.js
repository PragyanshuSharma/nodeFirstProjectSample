const express=require("express");

var db = require('knex')({
    client: 'sqlite3',
    connection: {
      filename:'./Database/mydatabase.sqlite'
        }
  });

const app=express();

app.get('/',(req,res)=>{
 res.send('Root Directory');
})


app.get('/select',(req,res)=>{
  db('persons')
  .then(data=>console.log(data[0].UserID , data[0].Password ))
  .catch(err=>console.log(err))
  
  res.send('Sub root Directory');
  
 })


app.listen(3000,()=>{
    console.log("Server has started");

}
);

