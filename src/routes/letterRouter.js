const express = require("express");
const router = express.Router();
const { Sequelize, sequelize, DataTypes } = require("sequelize");
const models = require("../models");

router.use(express.json());

router.post("/", async (req, res) => {
  try {
    const { s_id, content, date, c_id } = req.body;

    if (!s_id || !content || !c_id) {
      return res.status(400).json({ error: "필요정보가 누락되었습니다." });
    }

    const newBoard = await models.Board.create({
      s_id,
      content,
      date,
      c_id,
    });

    res.status(200).json(newBoard);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "서버 내부 오류가 발생했습니다." });
  }
});

router.get("/", async (req, res) => {
  try {
    const boards = await models.Board.findAll({
      attributes: ["id", "content", "date", "c_id"],
      include: [
        {
          model: models.category,
          required: true,
        },
      ],
    });
    res.status(200).json(boards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "서버 내부 오류가 발생했습니다." });
  }
});

module.exports = router;
