const express = require('express');  // Import express
const app = express();             // Create express app
const PORT = process.env.PORT || 3000;  // Set port
const cors = require('cors');     // Import cors

// Middleware
app.use(express.json());
app.use(cors());

// Routes //
// Register and Login Routes
app.use('/auth', require('./routes/jwtAuth'));

// Dashboard Route
app.use('/dashboard', require('./routes/dashboard'));

// PORT Listener
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
