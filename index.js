import express from "express";
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";



const port = 5000;

const app = express();

mongoose.connect('mongodb+srv://merishabjoshi:Rishab!23@cluster0.jexmr.mongodb.net/ShopUs').then((val) => {
  app.listen(port, (e) => {
    console.log('connected');
  });
  // console.log(val);
}).catch((err) => {
  console.log(err);
});

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// apis for product
// /api/products   ---- getAll Products--- add product--query
// api/products/:id --- delete update getById

// getAllproduct
// getProductById
// updateProduct
// deleteProduct
// add Product
// getProductByHighPrice





app.get('/', (req, res) => {
  return res.status(200).json({ data: 'hello jee' });
});


// app.use('/api/products', (req, res, next) => {
//   console.log('lio');
//   next();
//   //return res.status(400).json({ data: 'u are not allowed' });
// });


// app.get('/api/products', (req, res) => {
//   return res.status(200).json({ data: 'hello jee' });
// });



// app.use((req, res) => {
//   return res.status(404).json({ message: 'api not found' });
// });


app.use('/api/products',productRoutes);

app.use('/api/users', userRoutes);
// app.use('/api/users/login', userRoutes);


