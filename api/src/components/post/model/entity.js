'use strict';
/*
 Module dependencies
 */
import constants from '../../../common/constants';
import * as utils from '../../../common/utils';


/**
 * Post class
 */
class Post {

    /**
     * Constructor method
     * @param title
     * @param content
     * @param category
     * @param tags
     */
    constructor(title, content, category, tags) {
        this.title = title;
        this.content = content;
        this.category = category;
        this.tags = tags;
    }

    /*
     Empty function
    */
    emptyFunction() {
        
    }
}

export default Post;
