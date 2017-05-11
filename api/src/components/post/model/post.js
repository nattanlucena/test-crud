"use strict";
/*
 * Module dependencies
 */
import Collection from './schema';
import Post from './post';


/**
 * Returns the post collection instance to be used to create custom queries
 *
 * @returns {Collection}
 */
module.exports.getCollectionInstance = () => {
    return Collection;
};

/**
 *  Get all posts from database.
 *  Returns a callback with two params: err and posts
 *
 * @param query - Search query
 * @param options - query options
 * @param callback - First param: err, in case of error; Second param: records from DB
 */
module.exports.fetch = (query, options, callback) => {
    let qry = query || {};
    let localOptions = { __v: 0, password: 0 };
    if (typeof options === 'function') {
        callback = options;
    } else {
        localOptions = options ? Object.assign({}, localOptions, options) : localOptions;
    }
    Collection.find(qry, localOptions).lean().exec(callback);
};

/**
 * Save a post in database
 *
 * @param data - Data from post to be saved
 * @param callback - First param: err, in case of error; Second param: the saved record
 */
module.exports.save = (data, callback) => {
    try {
        let post = new Post(data.title, data.content, data.category, data.tags, data.author);

        UserModel.save(post.getDatabaseDoc(), callback);
    } catch (err) {
        return callback(err);
    }
};

/**
 * Find an post
 *
 * @param query
 * @param options - query options
 * @param callback
 */
module.exports.findOne = (query, options, callback) =>{
    let localOptions = {__v: 0};
    if (typeof options === 'function') {
        callback = options;
    } else {
        localOptions = options ? Object.assign({}, localOptions, options) : localOptions;
    }
    Collection.findOne(query, localOptions).exec(callback);
};

/**
 * Updates a post, given an id
 *
 * @param query
 * @param data - Post fields to update
 * @param options - query options
 * @param callback
 */
module.exports.update = (query, data, options, callback) => {

    let updateFields = {};
    //Default options
    let localOptions = {
        new: true, //return the modified document
        runValidators: true, //run the unique validator plugin
        context: 'query'
    };

    if (typeof options === 'function') {
        callback = options;
    } else {
        //Add options in default localOptions object
        localOptions = options ? Object.assign({}, localOptions, options) : localOptions;
    }

    //Update fields
    Object.keys(data).forEach( (key) => {
        updateFields[key] = data[key];
    });

    Collection.findOneAndUpdate(query, updateFields, localOptions, callback);
};

/**
 * Delete a post
 *
 * @param query
 * @param callback
 */
module.exports.remove = (query, callback) => {
    Collection.findOneAndRemove(query, callback);
};