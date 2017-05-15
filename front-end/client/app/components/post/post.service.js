'use strict';

/**
 * PostService to performs http requests to api
 *
 * @param $http
 * @constructor
 */
let PostService = function ($http) {

  const API_POST_BASE_PATH = 'http://localhost:5000/api/post';
  const API_POSTS_BASE_PATH = 'http://localhost:5000/api/posts';

  return {

    savePost: (post, callback) => {
      $http({
        method: 'POST',
        url: API_POST_BASE_PATH,
        data: post
      })
        .then(
          (success) => {
            callback(null, success.data);
          },
          (error) => {
            callback(error.data)
          }
        );
    }
  }
};

export default PostService;
