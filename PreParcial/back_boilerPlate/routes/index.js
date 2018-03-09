var express = require("express");
var router = express.Router();

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "carinfo";
const a =1;
// Use connect method to connect to the server
function getReviews(callback){
	MongoClient.connect(url, function(err, client) {
	  assert.equal(null, err);
	  console.log("Connected successfully to server");
	  const query ={};
	  const db = client.db(dbName);
	  findDocuments(db,query,callback);
	  client.close();
	});
}


const findDocuments = function(db, query, callback) {
  // Get the documents collection
  const collection = db.collection("reviews");
  // Find some documents
  collection.find({}).toArray(function(err, reviews) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(reviews)
    callback(reviews);
  });
}









/* GET home page. */
router.get("/reviews", function(req, res) {
	getReviews(
		(reviews)=>{res.send(reviews)})
		});

module.exports = router;
