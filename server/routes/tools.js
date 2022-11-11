const router = require("express").Router();
const pool = require("../db");

router.get('/alltools', async (req, res) => {
  try {
    const getTools = await pool.query(
      "SELECT * FROM tools WHERE user_id = $1", [req.user]
    );
    res.json(getTools.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;