var mongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

mongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("smpatel");
  /*Delete all customers where the address starts with an "O":*/
  var myquery = { address: /^O/ };
  dbo.collection("customers").deleteMany(myquery, function(err, obj) {
      console.log(obj, "obj+++");
    if (err) throw err;
    console.log(obj.deletedCount + " document(s) deleted");
    db.close();
  });
});