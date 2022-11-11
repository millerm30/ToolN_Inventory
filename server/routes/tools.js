const router = require("express").Router();
const pool = require("../db");
const authorization = require("../middleware/authorization");

// Get all the tools for the logged in user
router.get('/alltools', authorization, async (req, res) => {
  const userId = req.user.id;
  try {
    const getUserTools = await pool.query("SELECT * FROM tools WHERE user_id = $1", [userId]);
    res.json(getUserTools.rows);
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Delete a tool for the logged in user by id
router.delete('/deletetool/:id', authorization, async (req, res) => {
  try {
    const userId = req.user.id;
    const tool_id = req.params;
    console.log(typeof tool_id);
    const deleteTool = await pool.query("DELETE FROM tools WHERE tool_id = $1 AND user_id = $2", [userId, tool_id]);
    res.json("Tool was deleted!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;