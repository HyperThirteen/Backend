// const express = require("express");
// const axios = require("axios");
// const bodyParser = require("body-parser");

// const app = express();
// const port = 3000; // You can change this to your desired port

// app.use(bodyParser.json());

// // OAuth Configuration
// const oauthBaseUrl = "https://auth.bssm.kro.kr/api/oauth";

// // Token Issuance
// app.post("/token", async (req, res) => {
//   try {
//     const { clientId, clientSecret, authCode } = req.body;

//     // Make a request to the token endpoint
//     const tokenResponse = await axios.post(`${oauthBaseUrl}/token`, {
//       clientId,
//       clientSecret,
//       authCode,
//     });

//     res.status(200).json({ token: tokenResponse.data.token });
//   } catch (error) {
//     // Handle errors
//     console.error(error);
//     res.status(error.response.status || 500).json(error.response.data);
//   }
// });

// // Resource Retrieval
// app.post("/resource", async (req, res) => {
//   try {
//     const { clientId, clientSecret, token } = req.body;

//     // Make a request to the resource endpoint
//     const resourceResponse = await axios.post(`${oauthBaseUrl}/resource`, {
//       clientId,
//       clientSecret,
//       token,
//     });

//     res.status(200).json(resourceResponse.data);
//   } catch (error) {
//     // Handle errors
//     console.error(error);
//     res.status(error.response.status || 500).json(error.response.data);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });
