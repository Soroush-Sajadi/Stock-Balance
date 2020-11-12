const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const { modifier } = require('./Helper_Functions/stockModifier');
const { stringify } = require('uuid');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/:status/:code', (req, res) => {
  const status = req.params.status;
  const code = req.params.code;
  const result = modifier(status, code);
  res.json(result)
})
app.get('/stockb/:status/:code', (req, res) => {
  const status = req.params.status;
  const code = req.params.code;
  const result = modifier(status, code);
  res.json(result)
})

app.listen(PORT, () => console.log(`listening on port ${PORT}!`))