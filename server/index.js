const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');
var dataAccess = require('./services/data-access');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

  app.post('/addHackers', (req, res) => {
    console.log(req.body);
    dataAccess.addHackerToDB(req.body, res);
  });

  app.get('/getAllHackers', (req, res) => {
    dataAccess.getHackersFromDB();
  })

  app.get('/hackersView', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  });

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});