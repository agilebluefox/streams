"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Readable = require('stream').Readable;

var RandomNumber = function (_Readable) {
    _inherits(RandomNumber, _Readable);

    function RandomNumber(options) {
        _classCallCheck(this, RandomNumber);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RandomNumber).call(this, options));

        _this.length = 10;
        _this.min = 0;
        _this.max = 999;
        _this.diff = _this.max - _this.min;
        return _this;
    }

    _createClass(RandomNumber, [{
        key: '_read',
        value: function _read() {
            for (var i = 0; i < this.length; i++) {
                var number = Math.floor(Math.random() * this.diff) + this.min;
                var buf = Buffer.from(number.toString(), 'utf8');
                this.push(buf);
            }
            this.push(null);
        }
    }]);

    return RandomNumber;
}(Readable);

module.exports = RandomNumber;

//# sourceMappingURL=number-compiled.js.map