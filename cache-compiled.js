"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Writable = require('stream').Writable;

var Cache = function (_Writable) {
    _inherits(Cache, _Writable);

    function Cache(key, options) {
        _classCallCheck(this, Cache);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Cache).call(this, options));

        _this._key = key;
        _this._value = null;
        _this.on('finish', function () {
            Cache.store[this._key] = this._value;
        });
        return _this;
    }

    _createClass(Cache, [{
        key: '_write',
        value: function _write(chunk, encoding, callback) {
            // if no data exists in the buffer...
            if (!this._value) {
                this._value = chunk;
            }
            // if data is already present in the buffer...
            else {
                    this._value = Buffer.concat([this._value, chunk]);
                }
            callback();
        }
    }]);

    return Cache;
}(Writable);

Cache.store = {};

module.exports = Cache;

//# sourceMappingURL=cache-compiled.js.map