// index.js
import express from "express";
import connectDB from "./db/connectDB.js";
import authRoutes from "./routers/auth-routes.js";
import emailRoutes from "./routers/emailRoutes.js"; // This should match the default export

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/email", emailRoutes); // Use default export

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
