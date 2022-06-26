var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("smpatel");
  var myquery = { address: "Canyon 123" };
  var newvalues = {$set: {address: "XYZ"} };
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
