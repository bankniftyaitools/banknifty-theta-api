const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

const FYERS_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBfaWQiOiJIWUhKMENLVEtBIiwidXVpZCI6IjYwNjlmOTQwMTlkODQ5ZmFiOWViYmFmNTNmN2Q5MDBhIiwiaXBBZGRyIjoiIiwibm9uY2UiOiIiLCJzY29wZSI6IiIsImRpc3BsYXlfbmFtZSI6IlhNMDk4OTciLCJvbXMiOiJLMSIsImhzbV9rZXkiOiIyZWFjNmFlMjcxODNhZWUzMmZlMmMzMTBmZDVlNjVkMGY2OGM4NDczN2Q0OTg1N2M0MWYzNjQ1MiIsImlzRGRwaUVuYWJsZWQiOiJOIiwiaXNNdGZFbmFibGVkIjoiWSIsImF1ZCI6IltcImQ6MVwiLFwiZDoyXCIsXCJ4OjBcIixcIng6MVwiXSIsImV4cCI6MTc3OTUwMDM1MSwiaWF0IjoxNzc5NDcwMzUxLCJpc3MiOiJhcGkubG9naW4uZnllcnMuaW4iLCJuYmYiOjE3Nzk0NzAzNTEsInN1YiI6ImF1dGhfY29kZSJ9._ctMvYY1_EfaUjS7mVavvha38gep3HoQwxNsNKf6ZK8";

app.get("/", (req, res) => {
  res.send("Bank Nifty Theta API Running 🚀");
});

app.get("/banknifty", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api-t1.fyers.in/data/quotes?symbols=NSE:NIFTYBANK-INDEX",
      {
        headers: {
          Authorization: `Bearer ${FYERS_TOKEN}`,
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
