"use strict";
var User = (function () {
    function User(username, password, name, email, roles) {
        this.Username = username;
        this.Password = password;
        this.RememberMe = false;
        this.Name = name;
        this.Email = email;
        this.Roles = roles;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map