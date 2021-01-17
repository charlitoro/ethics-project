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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.authSession = void 0;
var bcrypt_1 = require("bcrypt");
var lodash_1 = require("lodash");
var commons_1 = require("../utils/commons");
var node_fetch_1 = require("node-fetch");
var getUser = function (origin, userLogin, clientId) { return __awaiter(void 0, void 0, void 0, function () {
    var response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, node_fetch_1["default"](commons_1.API_URL, {
                    method: 'POST',
                    headers: { 'Authorization': clientId, 'origin': origin },
                    body: JSON.stringify({
                        query: commons_1.queryAuthSession,
                        variables: { email: userLogin.email }
                    })
                }).then(function (res) { return res.json(); })];
            case 1:
                response = _a.sent();
                if (lodash_1.get(response, 'errors')) {
                    throw { statusCode: 404, message: 'User not found' };
                }
                return [2, lodash_1.get(response, 'data.admin')];
        }
    });
}); };
exports.authSession = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var adminResponse, clientId, origin_1, adminLogin, admin, isValid, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                adminResponse = { statusCode: 502, message: 'Internal server error' };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                clientId = lodash_1.get(req, 'headers.authorization');
                origin_1 = lodash_1.get(req, 'headers.origin', '*');
                if (lodash_1.isUndefined(clientId)) {
                    adminResponse.statusCode = 400;
                    adminResponse.message = 'Bad Request, not client id in headers';
                    throw adminResponse;
                }
                adminLogin = lodash_1.get(req, 'body');
                return [4, getUser(origin_1, adminLogin, clientId)];
            case 2:
                admin = _a.sent();
                isValid = bcrypt_1.compareSync(adminLogin.password, admin.password);
                if (isValid == false) {
                    adminResponse.statusCode = 404;
                    adminResponse.message = 'Incorrect password';
                    throw adminResponse;
                }
                res.status(200).json(lodash_1.omit(admin, ['password']));
                return [3, 4];
            case 3:
                error_1 = _a.sent();
                console.log(error_1.message);
                res.status(error_1.statusCode).send(error_1.message);
                return [3, 4];
            case 4: return [2];
        }
    });
}); };
//# sourceMappingURL=authSession.js.map