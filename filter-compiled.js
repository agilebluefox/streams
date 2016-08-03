"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Transform = require('stream').Transform;

var Filter = function (_Transform) {
    _inherits(Filter, _Transform);

    function Filter(options) {
        _classCallCheck(this, Filter);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(Filter).call(this, options));
    }

    _createClass(Filter, [{
        key: 'isUnder500',
        value: function isUnder500(value) {
            value = +value;
            return value < 500;
        }
    }, {
        key: '_transform',
        value: function _transform(data, encoding, callback) {
            // console.log(data.toString('utf8'));
            data = data.toString('utf8');
            if (+data < 500) {
                this.push(data);
            }
            callback();
        }
    }]);

    return Filter;
}(Transform);

module.exports = Filter;

//# sourceMappingURL=filter-compiled.js.map