const axios = require("axios");
const express = require("express");
const router = express.Router();

// OAuth Configuration
const oauthBaseUrl = "https://auth.bssm.kro.kr/api/oauth";

// Token Issuance
router.post("/token", async (req, res) => {
  try {
    const { clientId, clientSecret, authCode } = req.body;

    // Make a request to the token endpoint
    const tokenResponse = await axios.post(`${oauthBaseUrl}/token`, {
      clientId,
      clientSecret,
      authCode,
    });

    res.status(200).json({ token: tokenResponse.data.token });
  } catch (error) {
    // Handle errors
    console.error("Token Issuance Error:", error.message);
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { error: "Internal Server Error" });
  }
});

// Resource Retrieval
router.post("/resource", async (req, res) => {
  try {
    const { clientId, clientSecret, token } = req.body;

    // Make a request to the resource endpoint
    const resourceResponse = await axios.post(`${oauthBaseUrl}/resource`, {
      clientId,
      clientSecret,
      token,
    });

    res.status(200).json(resourceResponse.data);
  } catch (error) {
    // Handle errors
    console.error("Resource Retrieval Error:", error.message);
    res
      .status(error.response?.status || 500)
      .json(error.response?.data || { error: "Internal Server Error" });
  }
});

module.exports = router;
