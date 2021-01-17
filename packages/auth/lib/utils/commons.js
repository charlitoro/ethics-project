"use strict";
exports.__esModule = true;
exports.queryAuthSession = exports.SALT_ROUNDS = exports.API_URL = void 0;
exports.API_URL = 'https://app.scalars.co/rybk37gvz3/api';
exports.SALT_ROUNDS = 10;
exports.queryAuthSession = "\nquery ($code: String){\n  admin(where:{email: $email}){\n    id name email password\n  }\n}";
//# sourceMappingURL=commons.js.map