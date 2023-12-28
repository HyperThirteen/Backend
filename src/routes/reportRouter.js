const express = require("express");
const router = express.Router();
const models = require("../models");

router.use(express.json());

router.post("/", async (req, res) => {
  try {
    const { id } = req.body;

    // Ensure boardId is present in the request body
    if (!id) {
      return res.status(400).json({
        message: "Invalid request. Missing boardId in the request body.",
      });
    }

    // Check if the boardId exists in the board table
    const boardExists = await models.board.findByPk(id);

    if (!boardExists) {
      return res.status(404).json({ message: "게시글이 존재하지 않습니다." });
    }

    // Check if the boardId is already reported
    const alreadyReported = await models.blacklist.findOne({
      where: {
        id: id,
      },
    });

    if (alreadyReported) {
      return res.status(409).json({ message: "이미 신고된 게시글입니다." });
    }

    // Create a new report in the blacklist
    const newReport = await models.blacklist.create({
      id: id,
      // Add any other attributes if required
    });

    return res.status(201).json({ message: "게시글이 신고되었습니다." });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "서버에서 오류가 발생했습니다." });
  }
});

module.exports = router;
