import products from './data/productsArray.js';
import dotenv from 'dotenv';
import  express from 'express';


dotenv.config()
const app = express();

app.get('/', (req, res) => {
  res.send('API is running....');
});

app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => { 
  const product = products.find(p => p._id === req.params.id);
  res.json(product);
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`));