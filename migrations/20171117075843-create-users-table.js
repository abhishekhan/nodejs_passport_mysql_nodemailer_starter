'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  db.createTable('users', {
    id: {
    	type: 'int',
        unsigned: true,
        notNull: true,
        primaryKey: true,
        autoIncrement: true,
        length: 10
    },
    email: {
    	type: 'string',
    	length: 30,
    	notNull: true,
    	unique: true
    },
    email_verified: {
    	type: 'boolean',
    	defaultValue: false,
    	notNull: true
    },
    password: {
    	type: 'char',
    	length: 60,
    	notNull: true
    }
  }, function() {console.log("Users table created")});
  return null;
};

exports.down = function(db) {
  db.dropTable('users');
  return null;
};

exports._meta = {
  "version": 1
};
