require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");

const app = express();
app.use(cors());
app.use(express.json());

// Gemini init (NEW SDK)
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({ message: "Message is required" });
    }

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
    });

    res.json({ reply: response.text });

  } catch (error) {
    console.error("Gemini Error:", error);
    res.status(500).json({ error: "Error generating response" });
  }
});

app.listen(4005, () => {
  console.log("🚀 Server running at http://localhost:4005");
});
