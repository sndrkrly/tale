"use strict";
/*
    Created by Sándor Király on 29/04/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (req, _, next) {
    var exceptions = ['password'];
    Object.keys(req.body).forEach(function (key) {
        if (!exceptions.includes(key) && typeof req.body[key] === 'string') {
            req.body[key] = req.body[key].trim();
        }
    });
    next();
});
//# sourceMappingURL=trim.js.map