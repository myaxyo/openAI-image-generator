const epxress = require("express");
const router = epxress.Router();
const { generateImage } = require("../controllers/openaiController");

router.post("/generateimage", generateImage);

module.exports = router;
