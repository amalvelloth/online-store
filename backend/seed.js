const mongoose = require("mongoose");
const Product = require("./models/Product");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const products = [
  {
    id: "TY4674",
    name: "Urban Blaze: Racer",
    price: 37,
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1732883581_1212321.jpg?format=webp&w=1080&dpr=1.3",
    description:
      "Experience unmatched agility and performance with the Urban Blaze: Racer. Engineered for runners who value speed, comfort, and breathability. With an ultra-light mesh upper, reinforced heel support, and shock-absorbing sole, these shoes will take your daily jog or marathon prep to the next level. Designed with city runners in mind, it offers flexible movement and a stylish profile you can wear all day.",
    inventory: 10,
    brand: "Urban Blaze",
    modelNumber: "UB-RC01",
    dimensions: "30 x 20 x 10 cm",
    weight: "600 g",
    material: "Mesh & Rubber",
    color: "Red/Black",
    origin: "Made in Vietnam",
  },
  {
    id: "BZ9843",
    name: "Urban Blaze: Ryze",
    price: 49,
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1739598246_2744721.jpg?format=webp&w=480&dpr=1.3",
    description:
      "Take your streetwear game to the next level with the Urban Blaze: Ryze sneakers. Crafted for casual comfort, the synthetic leather body ensures durability while the cushioned insole offers all-day ease. Its sleek black silhouette makes it easy to pair with any outfit — from jeans to joggers. The non-slip sole and breathable interior lining make this sneaker ideal for both everyday errands and weekend adventures.",
    inventory: 20,
    brand: "Urban Blaze",
    modelNumber: "UB-RY02",
    dimensions: "32 x 21 x 11 cm",
    weight: "650 g",
    material: "Synthetic Leather",
    color: "Black",
    origin: "Made in India",
  },
  {
    id: "LM2231",
    name: "Urban Blaze: Court Blue",
    price: 89,
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1732859253_1707401.jpg?format=webp&w=480&dpr=1.3",
    description:
      "Command the court with confidence wearing the Urban Blaze: Court Blue. Designed specifically for basketball, these shoes offer ankle stability, reinforced toe caps, and superior grip on hardwood or asphalt. The dual-cushioning sole absorbs shocks from jumps while maintaining responsiveness during quick cuts. Its bold blue-and-white design ensures you play hard and look good doing it.",
    inventory: 15,
    brand: "Urban Blaze",
    modelNumber: "UB-CB03",
    dimensions: "34 x 22 x 12 cm",
    weight: "800 g",
    material: "Textile & Rubber",
    color: "Blue/White",
    origin: "Made in China",
  },
  {
    id: "HY7823",
    name: "Hydros: Rick N Morty",
    price: 120,
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1748628358_3617080.jpg?format=webp&w=480&dpr=1.3",
    description:
      "Step into an interdimensional adventure with the Hydros: Rick N Morty sneakers. These limited-edition kicks boast neon graphics and glow-in-the-dark soles inspired by the hit sci-fi series. Crafted with premium canvas and reinforced stitching, they provide long-lasting wear while standing out in any crowd. The padded collar and responsive cushioning ensure a snug, comfortable fit for all-day wear.",
    inventory: 8,
    brand: "Hydros",
    modelNumber: "HY-RM04",
    dimensions: "33 x 21 x 11 cm",
    weight: "750 g",
    material: "Canvas & Rubber",
    color: "Multicolor",
    origin: "Made in Japan",
  },
  {
    id: "RF3300",
    name: "Slides: Off-White",
    price: 15,
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1723870289_2032243.jpg?format=webp&w=480&dpr=1.3",
    description:
      "Simplicity meets style in the Slides: Off-White. These slip-on slides are designed with a contoured footbed that supports your arches and keeps you comfy whether you’re poolside or lounging at home. The EVA foam build is water-resistant and ultra-lightweight, making them a perfect travel companion or post-gym essential. Their minimal, versatile look fits any wardrobe.",
    inventory: 25,
    brand: "SlideFit",
    modelNumber: "SF-OW05",
    dimensions: "29 x 18 x 7 cm",
    weight: "400 g",
    material: "EVA Foam",
    color: "Off-White",
    origin: "Made in India",
  },
  {
    id: "MK5567",
    name: "Kanso: Black",
    price: 199,
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1734713063_9038098.jpg?format=webp&w=480&dpr=1.3",
    description:
      "Kanso: Black is the go-to training shoe for elite performers. Crafted with precision, it features a dual-density foam midsole for enhanced energy return and pressure absorption. The seamless knit upper adapts to your foot while offering breathability, and the molded heel cup locks you in place during fast-paced workouts. Its clean, all-black look is ideal for both the gym and everyday fashion.",
    inventory: 12,
    brand: "Kanso",
    modelNumber: "KN-BL06",
    dimensions: "31 x 20 x 10 cm",
    weight: "680 g",
    material: "Knit Fabric & Rubber",
    color: "Black",
    origin: "Made in USA",
  },
  {
    id: "NS7890",
    name: "Urban Blaze: Mafia",
    price: 75,
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1712145476_1098316.jpg?format=webp&w=480&dpr=1.3",
    description:
      "The Urban Blaze: Mafia sneakers combine modern design with vintage vibes. Featuring a bold high-top design, these kicks include extra padding around the ankle, a textured rubber sole for grip, and a breathable cotton lining. The black-and-white pattern adds a retro edge, while the side zip makes them easy to slip on and off. Ideal for trendsetters looking to make a statement.",
    inventory: 18,
    brand: "Urban Blaze",
    modelNumber: "UB-MF07",
    dimensions: "32 x 21 x 11 cm",
    weight: "700 g",
    material: "Canvas",
    color: "Black/White",
    origin: "Made in South Korea",
  },
  {
    id: "AK4412",
    name: "Naruto Shippuden: The Rogue Shinobi",
    price: 60,
    image:
      "https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1734848437_2680483.jpg?format=webp&w=480&dpr=1.3",
    description:
      "Celebrate your ninja spirit with the Naruto Shippuden: The Rogue Shinobi sneakers. Designed for anime fans and streetwear lovers alike, they feature hand-drawn inspired graphics, reinforced toe caps, and shock-absorbing midsoles. The neutral tones pair effortlessly with any outfit, while the memory foam footbed provides lasting comfort throughout your day.",
    inventory: 30,
    brand: "ShinobiWear",
    modelNumber: "SW-NS08",
    dimensions: "30 x 20 x 10 cm",
    weight: "720 g",
    material: "Synthetic & Textile",
    color: "Grey/Black",
    origin: "Made in Thailand",
  },
];

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(products);
  console.log("Database seeded");
  mongoose.connection.close();
};

seedDB();
