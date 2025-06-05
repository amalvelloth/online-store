const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const products = [
  {
    id: 'TY4674',
    name: 'Product 1',
    price: 37,
    image: 'https://via.placeholder.com/150',
    description: 'Lorem ipsum dolor sit amet...',
    inventory: 10,
    brand: 'New Products Corp.',
    modelNumber: 'TY4674',
    dimensions: '12 x 8 x 3 cm',
    weight: '1.2 kg',
    material: 'Aluminum',
    color: 'Red',
    origin: 'Made in Canada',
  },
  {
    id: 'BZ9843',
    name: 'Product 2',
    price: 49,
    image: 'https://via.placeholder.com/150',
    description: 'High-quality gadget for everyday use.',
    inventory: 20,
    brand: 'TechZone',
    modelNumber: 'BZ9843',
    dimensions: '10 x 6 x 2 cm',
    weight: '800 g',
    material: 'Plastic',
    color: 'Black',
    origin: 'Made in Germany',
  },
  {
    id: 'LM2231',
    name: 'Product 3',
    price: 89,
    image: 'https://via.placeholder.com/150',
    description: 'Stylish and durable everyday accessory.',
    inventory: 15,
    brand: 'StylePro',
    modelNumber: 'LM2231',
    dimensions: '20 x 10 x 4 cm',
    weight: '1.5 kg',
    material: 'Leather',
    color: 'Brown',
    origin: 'Made in Italy',
  },
  {
    id: 'HY7823',
    name: 'Product 4',
    price: 120,
    image: 'https://via.placeholder.com/150',
    description: 'Top-rated kitchen tool for chefs.',
    inventory: 8,
    brand: 'KitchenX',
    modelNumber: 'HY7823',
    dimensions: '30 x 12 x 6 cm',
    weight: '2 kg',
    material: 'Stainless Steel',
    color: 'Silver',
    origin: 'Made in Japan',
  },
  {
    id: 'RF3300',
    name: 'Product 5',
    price: 15,
    image: 'https://via.placeholder.com/150',
    description: 'Simple and effective home tool.',
    inventory: 25,
    brand: 'HomeEase',
    modelNumber: 'RF3300',
    dimensions: '8 x 5 x 2 cm',
    weight: '500 g',
    material: 'Rubber',
    color: 'Green',
    origin: 'Made in India',
  },
  {
    id: 'MK5567',
    name: 'Product 6',
    price: 199,
    image: 'https://via.placeholder.com/150',
    description: 'Premium quality portable speaker.',
    inventory: 12,
    brand: 'SoundPulse',
    modelNumber: 'MK5567',
    dimensions: '15 x 7 x 7 cm',
    weight: '700 g',
    material: 'Metal/Plastic',
    color: 'Blue',
    origin: 'Made in USA',
  },
  {
    id: 'NS7890',
    name: 'Product 7',
    price: 75,
    image: 'https://via.placeholder.com/150',
    description: 'Professional grooming kit.',
    inventory: 18,
    brand: 'GroomWell',
    modelNumber: 'NS7890',
    dimensions: '18 x 9 x 5 cm',
    weight: '1.1 kg',
    material: 'Steel',
    color: 'Black',
    origin: 'Made in South Korea',
  },
  {
    id: 'AK4412',
    name: 'Product 8',
    price: 60,
    image: 'https://via.placeholder.com/150',
    description: 'Multi-purpose ergonomic chair accessory.',
    inventory: 30,
    brand: 'ErgoComfort',
    modelNumber: 'AK4412',
    dimensions: '25 x 15 x 10 cm',
    weight: '2.3 kg',
    material: 'Memory Foam',
    color: 'Grey',
    origin: 'Made in Sweden',
  }
];


const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log('Database seeded');
  mongoose.connection.close();
};

seedDB();