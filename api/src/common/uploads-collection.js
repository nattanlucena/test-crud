let mongoose = require('mongoose');
let db = mongoose.connection.db;
let uploadsCollection = db.collection('avatar-user.files');

export default uploadsCollection