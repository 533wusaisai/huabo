const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
  image: {
    type: String,
  },
});

module.exports = {
  Upload: mongoose.model("UploadSchema", uploadSchema),
};
