
const express = require ('express')
const mongoos = require ("mongoose")
const product = require ('./models/productmodels')
const app = express ()

app.use(express.json())

//routes
app.get ('/', (req, res)=>{
   res.send('hello node api , my name is Yameen khan') 
})

app.get ('/blog', (req, res)=>{
   res.send('hello blog my name is yameen') 
})

app.get ('/products', async (req, res)=>{
   try {
      const manyProducts = await product.find({});
      res.status(200).json(manyProducts);
   } catch (error) {
      res.status(500).json({message: error.message})
      
   }
})
// update a product
app.put ('/products/:id', async(req, res)=>{
   try {
      const {id} = req.params;
      const updateProduct =await product.findByIdAndUpdate(id, req.body);
      //we cant find product in database
      if(!updateProduct){
         return res.status(404).json({message: 'cannot find any product with ID ${id}'})
      }
      const updatedProduct = await product.findById(id) 
      res.status(200).json(updatedProduct);
      
   } catch (error) {
      res.status(500).json({message: error.message})
      
   }
})
//delete a product
app.delete ('/products/:id', async (req, res)=>{
   try {
      const {id} = req.params;
    const delProduct = await product.findByIdAndDelete(id)
    if(!delProduct){
      return res.status(404).json({message: 'cannot find any product with ID ${id}'})
    }

    res.status(200).json(delProduct);
 
   } catch (error) {
    res.status(500).json({message: error.message})
   }
 })
 


app.post ('/products', async (req, res)=>{
  try {
   const newProduct = await product.create(req.body)
   res.status(200).json(newProduct);

  } catch (error) {
   console.log(error.message);
   res.status(500).json({message: error.message})
  }
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