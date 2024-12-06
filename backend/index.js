import express from "express";
import connectDB from "./db/connectDB.js";
import authRoutes from "./routers/auth-routes.js";
import emailRoutes from "./routers/emailRoutes.js";
import cors from "cors";
import suggRoutes from "./routers/cropRoutes.js"; // Your original crop routes
import router from "./routers/cropSuggestionsRoutes.js";

import cropDetailRoutes from "./routers/cropDetailRoutes.js"; // Import new route
//import cropSuggestionRoutes from "./routers/cropSuggestionsRoutes.js"; // New route for crop suggestions

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Define the routes
app.use("/get", (req, res) => {
  res.json({ message: "Backend Working" });
});
app.use("/api/auth", authRoutes);
app.use("/api/email", emailRoutes);
app.use("/api/crops", suggRoutes);
app.use("/api/crop-details", cropDetailRoutes); // Use the new routes
//app.use("/api/crop-suggestions", cropSuggestionRoutes); // Use the new crop suggestion routes

// Connect to DB and start server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
