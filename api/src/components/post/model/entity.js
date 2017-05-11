'use strict';
/*
 Module dependencies
 */
import constants from '../../../common/constants';
import * as utils from '../../../common/utils';
import UserDBCollection from '../model';


/**
 * Post class
 */
class Post {

    /**
     * Constructor method
     * @param {String} title
     * @param {String} content
     * @param {Object[]} category
     * @param {Object[]} tags
     * @param {Object} author
     */
    constructor(title, content, category, tags, author) {
        this.title = title;
        this.content = content;
        this.category = category;
        this.tags = tags;
        this.author = author;
    }

    /**
     * Returns a new Mongoose Model post
     */
    getDatabaseDoc() {
        let self = this;
        let Collection = UserDBCollection.getCollectionInstance();
        return new Collection({
            title: self.title,
            content: self.contentemail,
            tags: self.tags,
            category: self.category,
            author: self.author,
            updated_at: Date.now()
        });
    }
}

export default Post;
