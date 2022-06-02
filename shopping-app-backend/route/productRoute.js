const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Review = require('../models/review');
const { isLoggedIn } = require('../middleware');


router.get('/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log('error in getting products!!!');
  }
});

//creating product
router.post('/products', async (req, res) => {
  // console.log(req.body);
  const product = await Product.create(req.body);
  res.status(200).json(product);
});

//particular product
router.get('/products/:id', async (req, res) => {
  const product = await Product.findById(req.params.id).populate('reviews');
  res.json(product);
});


//edit product
router.get('/products/:id/edit', async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
});


//patch route
router.patch('/products/:id', async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body);
  res.json(product);
});


//delete product
router.delete('/products/:id', async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json('deleted!');
});


//create a review
router.post('/products/:id/review', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const review = new Review({
      ...req.body,
    });
    product.reviews.push(review);
    await review.save();
    await product.save();
    res.status(200).json(product);
  } catch (error) {
    res.send('error while creating a review');
  }
});


module.exports = router;
