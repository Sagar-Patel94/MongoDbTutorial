var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/smpatel";

mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("smpatel");
  //Exclude "address" field in the result:
  dbo.collection("customers").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});