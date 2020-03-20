const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const envPath = path.resolve(process.cwd(), '', '.env');
require('dotenv').config({
  path: envPath,
});

const app = express();
const port = process.env.APP_PORT || 8000;

const { statisticsRoutes, tipsRoutes, newsRoutes } = require('./routes');

app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

app.use(statisticsRoutes);
app.use(tipsRoutes); 
app.use(newsRoutes); 

const server = app.listen(port, () => console.log(`App started successfully! Try it at http://localhost:${port}`));

