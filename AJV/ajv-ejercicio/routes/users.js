const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const userSchema = require("../schemas/user.schema.json");

router.post("/", validate(userSchema), (req, res) => {
  res.status(200).json({
    ok: true,
    message: "User válido"
  });
});

module.exports = router;
