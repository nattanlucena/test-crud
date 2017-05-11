let PostService = function ($http) {

  const API_BASE_PATH = 'http://localhost:5000/api';

  return {

    getPosts: (callback) => {
      $http({
        method: 'GET',
        url: API_BASE_PATH + '/posts',
      }).then((data) => {
        console.log(data)
        callback(null, data.data.data);
      }, (err) => {
        console.log(err)
        callback(err);
      })
    },

    getPostByID: (id, callback) => {
      $http({
        method: 'GET',
        url: API_BASE_PATH + '/post/' + id,
      }).then(function success(data) {
        callback(null, data);
      }, function error(err) {
        callback(err);
      })
    },

  };

};

export default PostService;
