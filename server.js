const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

const FYERS_TOKEN = process.env.FYERS_TOKEN;

app.get("/", (req, res) => {
  res.send("Bank Nifty Theta API Running 🚀");
});

app.get("/banknifty", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api-t1.fyers.in/data/quotes?symbols=NSE:NIFTYBANK-INDEX",
      {
        headers: {
     Authorization: FYERS_TOKEN,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
