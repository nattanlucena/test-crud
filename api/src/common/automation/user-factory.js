/**
 * User factory
 */
module.exports = {
    generateUsers : function() {
        let users = [];
        for (let i = 0; i < 10; i++) {
            let user = {
                "name": "user" + i,
                "email": "user" + i + "@gmail.com",
                "password": "12345" + i,
                "cpf": "12345" + i
            };
            users.push(user);
        }
        return users;
    }
   /* generateCustomUsers: function(){

        let users = [];

        let user1 = {
            "name": "user1",
            "email": "user1@gmail.com",
            "password": "12345",
            "cpf": "12345"
        };
        users.push(user1);

        return users;
    }*/
};
