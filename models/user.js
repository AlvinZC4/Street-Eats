module.exports = function(sequelize, Datatypes) {
    const User = sequelize.define("User", {
        userName: Datatypes.STRING
    });

    return User;
};