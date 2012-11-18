MongoDM
=======

Usage
-----

Basic Usage

    var mongo = require('mongodm');
    var db = mongo.Connection('127.0.0.1:27017');

    var User = db.Document({
      collectionName: 'users',
      email: db.String(),
      firstName: db.String(),
      lastName: db.String(),
      age: db.Integer()
    }, {
      email: 1,
      firstName: 1
    });

    var jesse = new User({
      firstName: "Jesse",
      lastName: "Panganiban",
      age: 21
    });

    jesse.save(function(err, user) {
      if (err) {
        console.log(err);
      }
    });

    // Getting a list of documents
    User.find({firstName: "Jesse"}, {sort: [{firstName: 1}], function(err, users) {
      console.log(users);  // Returns a list of users sorted by firstName
    });

    // Alternatively... (Synchronous)
    // var users = User.findSync({firstName: "Jesse"}, {sort: [firstName: 1}]);
    // console.log(users);

    // Getting a single document
    User.findOne({firstName: "Jesse"}, function(err, user) {
      console.log(user);  // Returns a single user or null
    });

    // Alternatively... (Synchronous)
    // var user = User.findOneSync({});
    // console.log(user);
