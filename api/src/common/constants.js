/**
 * Constants file
 */
export const constants = {

    //Constants for user module
    //Code: 1xxxx
    user: {

        //100xx
        success: {
            CREATED: {code: 10000, message: 'User successfully created'},
            UPDATED: {code: 10001, message: 'User successfully updated'},
            REMOVED: {code: 10002, message: 'User successfully removed'},
        },
        //101xx
        error: {
            NAME_AND_EMAIL_REQUIRED: {
                code: 10100,
                message: "Fields name and email are required"
            },
            NAME_REQUIRED: {
                code: 10101,
                message: "Field name is required"
            },
            EMAIL_REQUIRED: {
                code: 10102,
                message: "Field email is required"
            },
            INVALID_EMAIL_ADDRESS: {
                code: 10103,
                message: "Invalid email address"
            },
            USER_NOT_FOUND: {
                code: 10104,
                message: "User not found"
            },
        },

        //Code: 11xxx
        manager: {
            //110xx
            success: {
                CREATED: {code: 11000, message: 'Manager successfully created'},
                UPDATED: {code: 11001, message: 'Manager successfully updated'},
                REMOVED: {code: 11002, message: 'Manager successfully removed'},
            },
            //111xx
            error: {
                ALL_REQUIRED_FIELDS: {
                    code: 11100,
                    message: 'Fields name, email, cpf and address are required'
                },
                CPF_REQUIRED: {
                    code: 11101,
                    message: "Field cpf is required"
                },
                ADDRESS_REQUIRED: {
                    code: 11102,
                    message: "Field address is required"
                },
                MANAGER_NOT_FOUND: {
                    code: 11103,
                    message: "Manager not found"
                },
            }
        },
        //Code: 12xxx
        app: {},

    },

    //Constants for auth module
    //Code: 2xxxx
    auth: {
        success: {},
        error: {
            INVALID_EMAIL_OR_PASSWORD: {
                code: 20000,
                message: 'Invalid email or password'
            }
        }

    },


    //Constants for post module
    //Code: 3xxxx
    post: {
        success: {},
        error: {
            POST_NOT_FOUND: {code: 30000, message: "Post not found"}
        }

    },

};
