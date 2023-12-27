const express = require("express");
const app = express();
const db = require("./models");
const port = 6000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/letter", boardRouter);
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
