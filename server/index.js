import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongoDB/connect.js";
import postRoutes from "./routes/postRoutes.js";
import imageGenRoutes from "./routes/imageGenRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/imageGen", imageGenRoutes);

app.get("/", async (req, res) => {
  res.send("Hello From ImageGen");
});

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () =>
      console.log("server started on https://localhost:8080")
    );
  } catch (err) {
    console.log(error);
  }
};

startServer();
