"use strict";
/*
    Created by Sándor Király on 30/04/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = exports.makeID = void 0;
function makeID(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    ;
    return result;
}
exports.makeID = makeID;
;
function slugify(str) {
    str = str.trim();
    str = str.toLowerCase();
    var from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
    var to = 'aaaaaaeeeeiiiioooouuuunc------';
    for (var i = 0, l = from.length; i < l; i++) {
        str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
    }
    ;
    return str
        .replace(/[^a-z0-9 -]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
        .replace(/-/g, '_');
}
exports.slugify = slugify;
;
//# sourceMappingURL=helpers.js.map