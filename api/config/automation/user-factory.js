/**
 * User factory
 */
module.exports = {
    generateUsers : function() {
        let users = [];
        for (let i = 0; i < 20; i++) {
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
};
