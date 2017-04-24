const express = require('express');
const app = express();

var PORT = 3000;
app.listen(PORT, function() {
  console.log(`Server listening on ${PORT}`);
});

app.get('/', function (req, res) {
  res.send('Hello World!')
});
