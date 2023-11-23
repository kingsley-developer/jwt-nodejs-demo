"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const bcrypt_1 = require("bcrypt");
const moment_1 = __importDefault(require("moment"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT);
const date = (0, moment_1.default)().calendar();
app.use((0, cors_1.default)({
    credentials: true
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
function Server() {
    app.post("/register", (Req, Res) => __awaiter(this, void 0, void 0, function* () {
        let { email, password } = Req.body;
        try {
            const hashpassword = yield (0, bcrypt_1.hash)(password, 10);
            console.log(hashpassword);
            Res.status(404).json({ date, hashpassword });
        }
        catch (e) {
            Res.status(404).json({ date, msg: "Failed to create user" });
        }
    }));
    app.use("*", (Req, Res) => {
        Res.status(404).json({ date, msg: "Page not found" });
    });
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}
exports.default = Server;
//# sourceMappingURL=_api.js.map