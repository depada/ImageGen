import express from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const open_ai = new OpenAIApi(config);

router.route("/").get((req, res) => {
  res.send("Hello from OpenAi ImageGen");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResp = await open_ai.createImage({
      prompt: prompt,
      n: 1,
      size: "1024x1024",
      response_format: "b64_json",
    });
    const image = aiResp.data.data[0].b64_json;
    res.status(200).json({
      photo: image,
    });
  } catch (err) {
    console.log("error here==>", err);
    res.status(500).send(err?.response.data.error.message);
  }
});

export default router;
