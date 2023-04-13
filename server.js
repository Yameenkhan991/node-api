
const express = require ('express')
const mongoos = require ("mongoose")
const app = express ()

//routes
app.get ('/', (req, res)=>{
   res.send('hello node api , this is my first app') 
})
app.get ('/blog', (req, res)=>{
   res.send('hello blog my name is yameen') 
})



mongoos.connect("mongodb+srv://admin:pj5ZOjGFVY14b1jx@yameen.pvpnzci.mongodb.net/node-api?retryWrites=true&w=majority")
.then(()=>{
   console.log('connected to mongodb')
   app.listen(3000, ()=>{
   console.log('node api is running on port 3000')

})
  
})
.catch((error)=>{
   console.log('error')

})