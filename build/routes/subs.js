"use strict";
/*
    Created by Sándor Király on 30/04/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var express_1 = require("express");
var class_validator_1 = require("class-validator");
var Sub_1 = __importDefault(require("../entities/Sub"));
var auth_1 = __importDefault(require("../middleware/auth"));
var createSub = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, title, description, user, errors, sub, err_1, sub, err_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, title = _a.title, description = _a.description;
                user = res.locals.user;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                errors = {};
                if (class_validator_1.isEmpty(name))
                    errors.name = 'A név nem lehet üres!';
                if (class_validator_1.isEmpty(title))
                    errors.title = 'A cím nem lehet üres!';
                return [4 /*yield*/, typeorm_1.getRepository(Sub_1.default)
                        .createQueryBuilder('sub')
                        .where('lower(sub.name) = :name', { name: name.toLowerCase() })
                        .getOne()];
            case 2:
                sub = _b.sent();
                if (sub)
                    errors.name = 'A típus már létezik!';
                if (Object.keys(errors).length > 0) {
                    throw errors;
                }
                ;
                return [3 /*break*/, 4];
            case 3:
                err_1 = _b.sent();
                return [2 /*return*/, res.status(400).json(err_1)];
            case 4:
                ;
                _b.label = 5;
            case 5:
                _b.trys.push([5, 7, , 8]);
                sub = new Sub_1.default({ name: name, description: description, title: title, user: user });
                return [4 /*yield*/, sub.save()];
            case 6:
                _b.sent();
                return [2 /*return*/, res.json(sub)];
            case 7:
                err_2 = _b.sent();
                console.log(err_2);
                return [2 /*return*/, res.status(500).json({ error: 'Valami félre ment:/' })];
            case 8:
                ;
                return [2 /*return*/];
        }
    });
}); };
var router = express_1.Router();
router.post('/', auth_1.default, createSub);
exports.default = router;
//# sourceMappingURL=subs.js.map