const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./models");
const port = 8080;
const letterRouter = require("./routes/letterRouter");
const reportRouter = require("./routes/reportRouter");
//const oauth = require("./routes/oauth");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api/letter", letterRouter);
app.use("/api/report", reportRouter);

db.sequelize
  .sync()
  .then(() => {
    console.log("db connect");
  })
  .catch(console.error);

app.listen(port, () => {
  console.log(`listening at https://localhost:${port}`);
});
