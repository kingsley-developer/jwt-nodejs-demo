"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRefresh = exports.sendAccess = exports.createRefresh = exports.createAccess = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
function createAccess(userId) {
    return (0, jsonwebtoken_1.sign)({ userId }, String(process.env.ACCESS_TOKEN_SECRET), {
        expiresIn: "15m",
    });
}
exports.createAccess = createAccess;
function createRefresh(userId) {
    return (0, jsonwebtoken_1.sign)({ userId }, String(process.env.REFRESH_TOKEN_SECRET), {
        expiresIn: "7d",
    });
}
exports.createRefresh = createRefresh;
function sendAccess(req, res, accessToken) {
    res.send({
        accessToken,
        email: req.body.email
    });
}
exports.sendAccess = sendAccess;
function sendRefresh(res, refreshToken) {
    res.cookie("refreshtoken", refreshToken, {
        httpOnly: true,
        path: "/refresh_token"
    });
}
exports.sendRefresh = sendRefresh;
//# sourceMappingURL=tokens.js.map