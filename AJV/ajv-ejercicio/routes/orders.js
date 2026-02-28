const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const orderSchema = require("../schemas/order.schema.json");

router.post("/", validate(orderSchema), (req, res) => {
  res.status(200).json({
    ok: true,
    message: "Order válido"
  });
});

module.exports = router;