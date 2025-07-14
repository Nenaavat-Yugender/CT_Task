const mongoose = require('mongoose');

// Product schema for an e-commerce store
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },               // Name of the product
  price: { type: Number, required: true },              // Product price
  description: { type: String, default: 'No description provided.' }, // Optional product description
  category: { type: String, required: true },           // Product category (e.g., Electronics)
  brand: { type: String },                              // Brand name (optional)
  stock: { type: Number, default: 0 },                  // Available quantity
  rating: { type: Number, default: 0 },                 // Average user rating (out of 5)
  reviews: { type: Number, default: 0 },                // Total number of reviews
  imageUrl: { type: String },                           // URL of product image
  isFeatured: { type: Boolean, default: false }         // Featured flag (for homepage display)
}, { timestamps: true });                               // Adds createdAt and updatedAt fields automatically

module.exports = mongoose.model('Product', productSchema); // Exporting Product model
