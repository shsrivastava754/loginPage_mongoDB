const path = require("path");

const index = (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../views/index.html"));
  } catch (error) {
    throw Error(error);
  }
};

module.exports = index;
