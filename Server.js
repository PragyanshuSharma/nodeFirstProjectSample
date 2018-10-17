const express=require("express");
const bodyparser = require('body-parser');
const cors = require('cors');

var db = require('knex')({
    client: 'sqlite3',
    connection: {
      filename:'./Database/mydatabase.sqlite'
        }
  });

const app=express();
app.use(bodyparser());//middleware
app.use(cors());//middleware


app.get('/',(req,res)=>{
 res.send('Root Directory');
})


app.post('/first',(req,res)=>{
  const {user,password} = req.body;
    //console.log(" user , password" , user,password);

  db('persons')
  .where('UserID','=',user)
  .where('Password','=',password)
  .then(data=>{
    console.log("data is ",data);
    console.log("length is ",data.length); 
    if(data.length===1){
        res.json({ status:'Correct' });
      }
     else
     res.json({ status :'Wrong'});  
    })
   .catch(err=>{
    console.log('error ');
  })

    
 })


app.listen(3000,()=>{
    console.log("Server has started");

}
);

