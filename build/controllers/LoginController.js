"use strict";
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.get = function () { };
    return LoginController;
}());
(function (req, res) {
    if (req.session && req.session.loggedIn) {
        res.send("\n          <div>\n              <div>You are logged in </div>\n              <a href=\"/logout\">Logout</a>\n          </div>\n          ");
    }
    else {
        res.send("\n          <div>\n              <div>You are not logged in</div>\n              <a href=\"/login\">Login</a>\n          </div>\n          ");
    }
});
;
