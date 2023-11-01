/**
 * enrty file
 * routes handled with router (see routes/routes.js)
 */

const express = require('express');
const app = express();
const router = require('./src/routes/routes');
const bodyParser = require('body-parser');
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.json());

app.use('/', router);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
