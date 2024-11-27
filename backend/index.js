import express from "express";
import connectDB from "./db/connectDB.js";
import authRoutes from "./routers/auth-routes.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

// {
//   "name": "Saklain",
//   "age": 20,
//   "gender": "Female",
//   "address": "Loone wala",
//   "phone": 123456789,
//   "formSize": 10,
//   "cnic": 12345678910,
//   "email": "saklain@gmail.com",
//   "password": "12345678"
// }
