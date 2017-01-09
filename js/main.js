'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AGE_CHOICE_MAP = [{
  id: 1,
  text: '34 歲以下'
}, {
  id: 2,
  text: '35-38 歲'
}, {
  id: 3,
  text: '39-40 歲'
}, {
  id: 4,
  text: '40 歲以上'
}];
var STATS_AGES_MAP = {
  1: {
    pregnantRate: 60,
    successRate: 39,
    totalCost: 224000,
    freezeBase: 100000
  },
  2: {
    pregnantRate: 50,
    successRate: 27,
    totalCost: 448000,
    freezeBase: 150000
  },
  3: {
    pregnantRate: 50,
    successRate: 27,
    totalCost: 448000,
    freezeBase: 325000
  },
  4: {
    pregnantRate: 33,
    successRate: 17,
    totalCost: 1792000,
    freezeBase: 550000
  }
};
var FREEZE_FEE_PER_YEAR = 8000;

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      age: 0,
      salaryPerMonth: ''
    };
    return _this;
  }

  App.prototype.render = function render() {
    var _this2 = this;

    var _state = this.state;
    var age = _state.age;
    var salaryPerMonth = _state.salaryPerMonth;

    var MAX_YEARS = 10;

    return React.createElement(
      'div',
      { className: 'app' },
      React.createElement(
        'section',
        null,
        React.createElement(
          'h3',
          null,
          '1. 請選擇您的年齡層'
        ),
        React.createElement(
          'div',
          { className: 'item' },
          React.createElement(
            'p',
            { className: 'control' },
            AGE_CHOICE_MAP.map(function (e) {
              return React.createElement(
                'label',
                { className: 'radio', key: e.id },
                React.createElement('input', { type: 'radio', name: 'age', value: e.id, onClick: _this2._onInputChange('age') }),
                e.text
              );
            })
          )
        )
      ),
      React.createElement(
        'section',
        null,
        React.createElement(
          'h3',
          null,
          '2. 您預計幾年後解凍卵子，進到試管嬰兒程序？'
        ),
        React.createElement(
          'p',
          { className: 'desc' },
          '每年卵子冷凍費為 $',
          FREEZE_FEE_PER_YEAR.toLocaleString(),
          ' 元， 建議以10年為限。台灣規定結婚才可以解凍卵子進行人工試管嬰兒程序，不建議想有小孩但不婚者採用凍卵方式。'
        ),
        React.createElement(
          'div',
          { className: 'item' },
          React.createElement(
            'p',
            { className: 'control' },
            this._emptyArray(MAX_YEARS).map(function (e) {
              return React.createElement(
                'label',
                { className: 'radio' },
                React.createElement('input', { type: 'radio', name: 'years',
                  value: e,
                  onChange: _this2._onInputChange('years') }),
                e + ' 年'
              );
            })
          )
        )
      ),
      React.createElement(
        'section',
        null,
        React.createElement(
          'h3',
          null,
          '3. 請輸入您的月薪（新台幣）'
        ),
        React.createElement(
          'div',
          { className: 'item' },
          React.createElement(
            'p',
            { className: 'control' },
            React.createElement('input', { className: 'input', type: 'number', min: 0,
              value: salaryPerMonth,
              onChange: this._onInputChange('salaryPerMonth') })
          )
        )
      ),
      age > 0 && React.createElement(
        'section',
        null,
        React.createElement(
          'h3',
          null,
          '測試結果'
        ),
        React.createElement(
          'p',
          null,
          '凍卵費（含取卵、凍卵、冷凍費、解凍）＝',
          ' ',
          React.createElement(
            'strong',
            null,
            '$',
            this._getFreezeTotalCost().toLocaleString()
          )
        ),
        React.createElement(
          'p',
          null,
          '您在不吃不喝的情況下，',
          React.createElement(
            'strong',
            null,
            this._getMonth(),
            '個月'
          ),
          '後會存到凍卵的錢'
        ),
        React.createElement(
          'h4',
          null,
          '若您決定解凍卵子，進入人工試管嬰兒程序：'
        ),
        React.createElement(
          'p',
          null,
          '懷孕率：',
          React.createElement(
            'strong',
            null,
            STATS_AGES_MAP[age].pregnantRate,
            '%'
          )
        ),
        React.createElement(
          'p',
          null,
          '成功生產（活產）率：',
          React.createElement(
            'strong',
            null,
            STATS_AGES_MAP[age].successRate,
            '%'
          )
        ),
        React.createElement(
          'p',
          { className: 'totalCost' },
          '總費用（凍卵費＋人工試管手術）＝ ',
          ' ',
          React.createElement(
            'strong',
            { className: 'finalAnswer' },
            '$',
            STATS_AGES_MAP[age].totalCost.toLocaleString()
          )
        )
      )
    );
  };

  App.prototype._onInputChange = function _onInputChange(key) {
    var _this3 = this;

    return function (e) {
      var _this3$setState;

      _this3.setState((_this3$setState = {}, _this3$setState[key] = e.target.value, _this3$setState));
    };
  };

  App.prototype._emptyArray = function _emptyArray(length) {
    var data = [];
    for (var i = 0; i < length; i++) {
      data.push(i + 1);
    }
    return data;
  };

  App.prototype._getFreezeTotalCost = function _getFreezeTotalCost() {
    var years = parseInt(this.state.years || 1, 10);
    var base = STATS_AGES_MAP[this.state.age || 1].freezeBase;
    var fee = FREEZE_FEE_PER_YEAR * years;
    return base + fee;
  };

  App.prototype._getMonth = function _getMonth() {
    var salaryPerMonth = this.state.salaryPerMonth;

    var cost = this._getFreezeTotalCost();
    var result = (cost / salaryPerMonth).toFixed(0);
    return isFinite(result) ? result : ' -- ';
  };

  return App;
}(React.Component);

React.render(React.createElement(App, null), document.getElementById('app'));