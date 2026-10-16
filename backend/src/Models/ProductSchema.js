const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    id: String,
    name: String
});

const productModel = mongoose.model("Product", ProductSchema);

module.exports = productModel;


// [
//   {
//     "id": "P001",
//     "name": "iPhone 15",
//     "category": "Electronics",
//     "price": 69999
//   },
//   {
//     "id": "P002",
//     "name": "Samsung Galaxy S24",
//     "category": "Electronics",
//     "price": 74999
//   },
//   {
//     "id": "P003",
//     "name": "Google Pixel 9",
//     "category": "Electronics",
//     "price": 79999
//   },
//   {
//     "id": "P004",
//     "name": "OnePlus 13",
//     "category": "Electronics",
//     "price": 64999
//   },
//   {
//     "id": "P005",
//     "name": "Sony WH-1000XM5",
//     "category": "Audio",
//     "price": 29999
//   },
//   {
//     "id": "P006",
//     "name": "AirPods Pro 2",
//     "category": "Audio",
//     "price": 24999
//   },
//   {
//     "id": "P007",
//     "name": "JBL Flip 6",
//     "category": "Audio",
//     "price": 11999
//   },
//   {
//     "id": "P008",
//     "name": "MacBook Air M3",
//     "category": "Laptops",
//     "price": 114999
//   },
//   {
//     "id": "P009",
//     "name": "Dell Inspiron 15",
//     "category": "Laptops",
//     "price": 64999
//   },
//   {
//     "id": "P010",
//     "name": "HP Pavilion 14",
//     "category": "Laptops",
//     "price": 58999
//   },
//   {
//     "id": "P011",
//     "name": "Lenovo IdeaPad Slim 5",
//     "category": "Laptops",
//     "price": 62999
//   },
//   {
//     "id": "P012",
//     "name": "Nike Air Max 270",
//     "category": "Footwear",
//     "price": 12999
//   },
//   {
//     "id": "P013",
//     "name": "Adidas Ultraboost",
//     "category": "Footwear",
//     "price": 14999
//   },
//   {
//     "id": "P014",
//     "name": "Puma RS-X",
//     "category": "Footwear",
//     "price": 8999
//   },
//   {
//     "id": "P015",
//     "name": "Nike Revolution 7",
//     "category": "Footwear",
//     "price": 4999
//   },
//   {
//     "id": "P016",
//     "name": "Levi's 511 Jeans",
//     "category": "Clothing",
//     "price": 2999
//   },
//   {
//     "id": "P017",
//     "name": "Adidas Hoodie",
//     "category": "Clothing",
//     "price": 3499
//   },
//   {
//     "id": "P018",
//     "name": "Nike Sports T-Shirt",
//     "category": "Clothing",
//     "price": 1999
//   },
//   {
//     "id": "P019",
//     "name": "Puma Track Pants",
//     "category": "Clothing",
//     "price": 2499
//   },
//   {
//     "id": "P020",
//     "name": "Logitech MX Master 3S",
//     "category": "Accessories",
//     "price": 8999
//   },
//   {
//     "id": "P021",
//     "name": "Apple Magic Keyboard",
//     "category": "Accessories",
//     "price": 10999
//   },
//   {
//     "id": "P022",
//     "name": "Logitech K380 Keyboard",
//     "category": "Accessories",
//     "price": 2999
//   },
//   {
//     "id": "P023",
//     "name": "Samsung 27-inch Monitor",
//     "category": "Monitors",
//     "price": 18999
//   },
//   {
//     "id": "P024",
//     "name": "LG UltraGear 24-inch",
//     "category": "Monitors",
//     "price": 15999
//   },
//   {
//     "id": "P025",
//     "name": "Dell 27-inch 4K Monitor",
//     "category": "Monitors",
//     "price": 29999
//   },
//   {
//     "id": "P026",
//     "name": "Kindle Paperwhite",
//     "category": "Books",
//     "price": 13999
//   },
//   {
//     "id": "P027",
//     "name": "Atomic Habits",
//     "category": "Books",
//     "price": 599
//   },
//   {
//     "id": "P028",
//     "name": "The Psychology of Money",
//     "category": "Books",
//     "price": 499
//   },
//   {
//     "id": "P029",
//     "name": "Canon EOS 1500D",
//     "category": "Cameras",
//     "price": 42999
//   },
//   {
//     "id": "P030",
//     "name": "Sony Alpha A6400",
//     "category": "Cameras",
//     "price": 72999
//   }
// ]