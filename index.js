const express = require('express');
const fs = require('fs');

const json = express();

json.get('/', (req, res) => {
  fs.readFile(`./${req.query.filename}.json`, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

const app = express();

app.use('/', express.static(`${__dirname}/dist/`));
app.use('/avi', express.static(`${__dirname}/static/images/avatars`));
app.use('/json', json);

const port = process.env.PORT || 3000;

app.listen(port, console.log(`Connected on ${port}`));
