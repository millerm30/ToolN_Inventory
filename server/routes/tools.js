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

// Create a new tool for the logged in user
router.post('/addtool/:id', authorization, async (req, res) => {
  const userId = req.user.id;
  const { tool_type, tool_brand, tool_model, tool_serial } = req.body;
  try {
    const newTool = await pool.query(
      "INSERT INTO tools (user_id, tool_type, tool_brand, tool_model, tool_serial) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [userId, tool_type, tool_brand, tool_model, tool_serial]
    );
    res.json(newTool.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Delete a tool for the logged in user by id
router.delete('/deletetool/:id', authorization, async (req, res) => {
  try {
    const userId = req.user.id;
    const tool_id = req.params.id;
    const deleteTool = await pool.query("DELETE FROM tools WHERE tool_id = $1", [tool_id]);
    res.json("Tool was deleted!");
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;