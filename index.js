

const express = require("express");
const app = express();
app.use(express.json());

const cg = [
{
"id": 1,
"title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
"price": 109.95,
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
"rating": {
"rate": 3.9,
"count": 120
}
},
{
"id": 2,
"title": "Mens Casual Premium Slim Fit T-Shirts ",
"price": 22.3,
"category": "men's clothing",
"image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
"rating": {
"rate": 4.1,
"count": 259
}
},
{
"id": 3,
"title": "Cotton Jacket",
"price": 55.99,
"category": "women's clothing",
"image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
"rating": {
"rate": 4.7,
"count": 500
}
}];

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.get("/cg", (req, res) => {
  res.status(200).json(cg);
});

app.get("/cg/students", (req, res) => {
  const names = cg.map((student) => student.studentName);
  res.status(200).json(names);
});



app.get("/cg/product/:id", (req, res) => {
  const { id } = req.params;

  const student = cg.find(
    (s) => s.id === parseInt(id)
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  res.status(200).json(student);
});


app.get("/cg/category/:type", (req, res) => {
  const { type } = req.params;

  const student = cg.find(
    (s) => s.category === type
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  res.status(200).json(student);
});


app.post("/cg/product/:id", (req, res) => {
  const { id } = req.params;

  const student = cg.find(
    (s) => s.id === parseInt(id)
  );

  if (!student) {
    return res.status(404).json({
      message: "Student not found",
    });
  }

  res.status(200).json(student);
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});


// const express = require("express");
// const app = express();

// app.use(express.json()); 

// let products = [
//   {
//     id: 1,
//     title: "Fjallraven - Backpack",
//     price: 109.95,
//     category: "men's clothing",
//     image: "image1.png",
//     rating: { rate: 3.9, count: 120 }
//   },
//   {
//     id: 2,
//     title: "Mens Casual T-Shirt",
//     price: 22.3,
//     category: "men's clothing",
//     image: "image2.png",
//     rating: { rate: 4.1, count: 259 }
//   },
//   {
//     id: 3,
//     title: "Cotton Jacket",
//     price: 55.99,
//     category: "women's clothing",
//     image: "image3.png",
//     rating: { rate: 4.7, count: 500 }
//   }
// ];

// app.get("/all", (req, res) => {
//   res.json(products);
// });

// app.get("/product/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const product = products.find(p => p.id === id);

//   if (!product) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   res.json(product);
// });

// app.post("/product/:id", (req, res) => {
//   const newProduct = req.body;

//   if (!newProduct.id || !newProduct.title) {
//     return res.status(400).json({ message: "Invalid product data" });
//   }

//   products.push(newProduct);

//   res.status(201).json({
//     message: "Product added successfully",
//     product: newProduct
//   });
// });

// app.get("/category/:type", (req, res) => {
//   const type = req.params.type.toLowerCase();

//   const filteredProducts = products.filter(
//     p => p.category.toLowerCase() === type
//   );

//   if (filteredProducts.length === 0) {
//     return res.status(404).json({ message: "No products found" });
//   }

//   res.json(filteredProducts);
// });


// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });
