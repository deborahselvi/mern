const {MongoClient} = require('mongodb');

const connectionString = "mongodb+srv://mango:1234@cluster0.mhthz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

module.exports = {
    addHackerToDB: function(req, res) {
        MongoClient.connect(connectionString, { useUnifiedTopology: true })
        .then(client => {
            // ...
            const db = client.db('challenge');
            const hackersCollection = db.collection('hackers');
            hackersCollection.insertOne(req).then(result => {
                res.redirect('/')
              })
              .catch(error => console.error(error));
        })
        .catch(console.error)
    },

    getHackersFromDB: function() {
        db.collection('quotes').find().toArray()
    .then(results => {
      console.log(results)
    })
    .catch(error => console.error(error))
    }
}