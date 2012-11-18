var mongo = require('mongodm');

/**
 * Define connection
 * 
 * Defaults to 127.0.0.1:27017
 */

var db = mongo.Connection('127.0.0.1:27017');

/**
 * Document Definition
 * ===================
 *
 * var Doc = db.Document(definition, [indexes]);
 *
 */

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

/**
 * Insert
 * ======
 *
 * Asynchronous inserts
 * --------------------
 * var document = new Document(attributes);
 * document.save();
 *
 * Synchronous inserts
 * -------------------
 * var document = new Document(attributes);
 * document.saveSync();
 *
 */

var jesse = new User({
  firstName: "Jesse",
  lastName: "Panganiban",
  age: 21
});

jesse.save(function(err, user) {
  // Error callback
});

/**
 * Find
 * ====
 *
 * Asynchronous finds
 * ------------------
 * Document.find(filter, options, [callback]);
 *
 * Synchronous finds
 * -----------------
 * Document.findSync(filter, options);
 *
 */

User.find({}, {}, function(err, users) {
});

var users = User.findSync({});

/**
 * Find One
 * ========
 *
 * Asynchronous finds
 * ------------------
 * Document.findOne(filter, options, [callback]);
 *
 * Synchronous finds
 * -----------------
 * Document.findOneSync(filter, options);
 *
 */

User.findOne({}, function(err, user) {
});

var user = User.findOneSync({});
