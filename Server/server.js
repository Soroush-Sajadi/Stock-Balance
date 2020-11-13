const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const { main } = require('./Helper_Functions/main');
const { packageIdentifier } = require('./Helper_Functions/packageIdentifier')
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/stock/a/:status/:code/:switcher', (req, res) => {
  const status = req.params.status;
  const code = req.params.code;
  const switcher = req.params.switcher;
  const result = main(status, code, switcher);
  res.json(result)
})


app.listen(PORT, () => console.log(`listening on port ${PORT}!`))