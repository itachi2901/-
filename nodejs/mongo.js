// node mongo.js
var MongoClient = require('mongodb').MongoClient,
    setting = require('./settings');

MongoClient.connect("mongodb://"+ setting.host+"/"+setting.db, function(err, db){
    if(err) {return console.dir(err);}
    console.log("connected to db");
    db.collection("users", function(err, collection) {
        var docs = [
            {name: "itachi", score: 40},
            {name: "itachi01", score: 30}
        ];
        collection.insert(docs, function(err, result){
            console.dir(result);
        });

        collection.find({name: "itachi"}).toArray(function(err, items){
            console.log(items);
        });

        //
        var stream = collection.find().stream();
        stream.on("data", function(item){
            console.log(item);
        });
        stream.on("end", function(){
           console.log("finished");
        });
    });
});