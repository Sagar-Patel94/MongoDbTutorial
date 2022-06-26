var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("smpatel");
  //Delete the "customers" collection:
  dbo.collection("products").drop(function(err, dropCollection) {  // You can also use the dropCollection() method
    if (err) throw err;
    if (dropCollection) console.log("Collection deleted");
    db.close();
  });
});