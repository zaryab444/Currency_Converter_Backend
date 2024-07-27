// server.js
const express = require('express');
const cors = require('cors');
const currencyRoutes = require('./route/currencyRoute');
const dotenv = require('dotenv');

dotenv.config();


const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use('/api', currencyRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
