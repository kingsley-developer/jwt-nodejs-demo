"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
function isAuth(req) {
    const authorization = req.header("authorization");
    console.log(authorization);
    if (!authorization)
        throw new Error("You need to login");
    const token = authorization.split(" ")[1];
    const { userId } = (0, jsonwebtoken_1.verify)(token, String(process.env.ACCESS_TOKEN_SECRET));
    return userId;
}
exports.default = isAuth;
//# sourceMappingURL=isAuth.js.map