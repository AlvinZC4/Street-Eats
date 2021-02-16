module.exports = function(sequelize, Datatypes) {
    const User = sequelize.define("User", {
        user_name: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        first_name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        last_name: {
            type: Datatypes.STRING,
            allowNull: false
        }
    });

    return User;
};