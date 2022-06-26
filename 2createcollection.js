var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("smpatel");
  console.log(dbo, "dbo+++");
  //Create a collection name "customers":
  dbo.createCollection("orders", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
