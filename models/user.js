module.exports = function(sequelize, Datatypes) {
    const User = sequelize.define("User", {
        user_name: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true
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