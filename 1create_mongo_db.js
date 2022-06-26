var mongoClient = require("mongodb").MongoClient;
//Create a database named "smpatel":
var url = "mongodb://localhost:27017/smpatel";

mongoClient.connect(url, function (err, db) {
  // console.log(db, "db+++");
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
