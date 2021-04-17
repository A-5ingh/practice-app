"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Like = void 0;
var Like = /** @class */ (function () {
    function Like() {
        this._likes = 0;
    }
    Like.prototype.liked = function () {
        this._likes++;
    };
    Object.defineProperty(Like.prototype, "likes", {
        get: function () {
            return this._likes;
        },
        enumerable: false,
        configurable: true
    });
    return Like;
}());
exports.Like = Like;
