const express = require('express');
const app = express();
const port = 3000;
const indexRouter = require('./routes/index');

// Middleware to parse incoming JSON
app.use(express.json());

// Use the routes defined in routes/index.js
app.use('/api', indexRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
