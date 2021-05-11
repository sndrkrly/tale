"use strict";
/*
    Created by Sándor Király on 30/04/21.

    Copyright (c) OMEGA Magyarország Kft.
    All rights reserved.
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var helpers_1 = require("../utils/helpers");
var Entity_1 = __importDefault(require("./Entity"));
var User_1 = __importDefault(require("./User"));
var Sub_1 = __importDefault(require("./Sub"));
var Post = /** @class */ (function (_super) {
    __extends(Post, _super);
    function Post(post) {
        var _this = _super.call(this) || this;
        Object.assign(_this, post);
        return _this;
    }
    ;
    Post.prototype.makeIDandSlug = function () {
        this.identifier = helpers_1.makeID(7);
        this.slug = helpers_1.slugify(this.title);
    };
    ;
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Post.prototype, "identifier", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Post.prototype, "title", void 0);
    __decorate([
        typeorm_1.Index(),
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Post.prototype, "slug", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true, type: 'text' }),
        __metadata("design:type", String)
    ], Post.prototype, "body", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Post.prototype, "subName", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.default; }, function (user) { return user.posts; }),
        typeorm_1.JoinColumn({ name: 'email', referencedColumnName: 'email' }),
        __metadata("design:type", User_1.default)
    ], Post.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Sub_1.default; }, function (sub) { return sub.posts; }),
        typeorm_1.JoinColumn({ name: 'subName', referencedColumnName: 'name' }),
        __metadata("design:type", Sub_1.default)
    ], Post.prototype, "sub", void 0);
    __decorate([
        typeorm_1.BeforeInsert(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Post.prototype, "makeIDandSlug", null);
    Post = __decorate([
        typeorm_1.Entity('posts'),
        __metadata("design:paramtypes", [Object])
    ], Post);
    return Post;
}(Entity_1.default));
exports.default = Post;
;
//# sourceMappingURL=Post.js.map