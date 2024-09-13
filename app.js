import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";


const app = express();

app.use(
  cors({
    origin: "http://localhost:5174",
    credentials: true,
  })
);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/users", userRoutes);


export default app; // Exporta 'app'
