const express = require("express");
const router = express.Router();
const models = require("../models");
const category = models.category;
const board = models.board;

router.post("/", async (req, res) => {
  console.log(req);
  const { content, c_id, title } = req.body;
  let { s_id } = req.body;

  if (!s_id) {
    s_id = null;
  }

  try {
    console.log("Received data:", { s_id, title, content, c_id });

    const newBoard = await board.create({
      s_id,
      title,
      content,
      c_id,
    });

    return res.status(201).json({
      status: "success",
      message: "마음의 편지가 성공적으로 작성되었습니다.",
      data: newBoard,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: "error",
      message: "서버 오류로 인해 마음의 편지 작성이 실패하였습니다.",
      error: err,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const boards = await board.findAll({
      attributes: ["id", "content", "title", "createdAt", "c_id"],
      include: [
        {
          model: category,
          as: "Category", // 대소문자를 일치시켜 'Category'로 변경
          attributes: ["c_id", "c_name"],
        },
      ],
    });

    if (boards.length === 0) {
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    } else {
      return res.status(200).json(boards);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "서버 내부 오류가 발생했습니다." });
  }
});

module.exports = router;
