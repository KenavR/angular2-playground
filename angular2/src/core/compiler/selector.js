System.register(["rtts_assert/rtts_assert", "angular2/src/facade/collection", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var assert,
      List,
      Map,
      ListWrapper,
      MapWrapper,
      isPresent,
      isBlank,
      RegExpWrapper,
      RegExpMatcherWrapper,
      StringWrapper,
      BaseException,
      _EMPTY_ATTR_VALUE,
      _SELECTOR_REGEXP,
      CssSelector,
      SelectorMatcher,
      SelectorContext;
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      List = $__m.List;
      Map = $__m.Map;
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      RegExpWrapper = $__m.RegExpWrapper;
      RegExpMatcherWrapper = $__m.RegExpMatcherWrapper;
      StringWrapper = $__m.StringWrapper;
      BaseException = $__m.BaseException;
    }],
    execute: function() {
      _EMPTY_ATTR_VALUE = '';
      _SELECTOR_REGEXP = RegExpWrapper.create('(\\:not\\()|' + '([-\\w]+)|' + '(?:\\.([-\\w]+))|' + '(?:\\[([-\\w*]+)(?:=([^\\]]*))?\\])');
      CssSelector = $__export("CssSelector", (function() {
        var CssSelector = function CssSelector() {
          this.element = null;
          this.classNames = ListWrapper.create();
          this.attrs = ListWrapper.create();
          this.notSelector = null;
        };
        return ($traceurRuntime.createClass)(CssSelector, {
          setElement: function() {
            var element = arguments[0] !== (void 0) ? arguments[0] : null;
            assert.argumentTypes(element, assert.type.string);
            if (isPresent(element)) {
              element = element.toLowerCase();
            }
            this.element = element;
          },
          addAttribute: function(name) {
            var value = arguments[1] !== (void 0) ? arguments[1] : _EMPTY_ATTR_VALUE;
            assert.argumentTypes(name, assert.type.string, value, assert.type.string);
            ListWrapper.push(this.attrs, name.toLowerCase());
            if (isPresent(value)) {
              value = value.toLowerCase();
            } else {
              value = _EMPTY_ATTR_VALUE;
            }
            ListWrapper.push(this.attrs, value);
          },
          addClassName: function(name) {
            assert.argumentTypes(name, assert.type.string);
            ListWrapper.push(this.classNames, name.toLowerCase());
          },
          toString: function() {
            var res = '';
            if (isPresent(this.element)) {
              res += this.element;
            }
            if (isPresent(this.classNames)) {
              for (var i = 0; i < this.classNames.length; i++) {
                res += '.' + this.classNames[i];
              }
            }
            if (isPresent(this.attrs)) {
              for (var i = 0; i < this.attrs.length; ) {
                var attrName = this.attrs[i++];
                var attrValue = this.attrs[i++];
                res += '[' + attrName;
                if (attrValue.length > 0) {
                  res += '=' + attrValue;
                }
                res += ']';
              }
            }
            if (isPresent(this.notSelector)) {
              res += ":not(" + this.notSelector.toString() + ")";
            }
            return assert.returnType((res), assert.type.string);
          }
        }, {parse: function(selector) {
            assert.argumentTypes(selector, assert.type.string);
            var cssSelector = new CssSelector();
            var matcher = RegExpWrapper.matcher(_SELECTOR_REGEXP, selector);
            var match;
            var current = cssSelector;
            while (isPresent(match = RegExpMatcherWrapper.next(matcher))) {
              if (isPresent(match[1])) {
                if (isPresent(cssSelector.notSelector)) {
                  throw new BaseException('Nesting :not is not allowed in a selector');
                }
                current.notSelector = new CssSelector();
                current = current.notSelector;
              }
              if (isPresent(match[2])) {
                current.setElement(match[2]);
              }
              if (isPresent(match[3])) {
                current.addClassName(match[3]);
              }
              if (isPresent(match[4])) {
                current.addAttribute(match[4], match[5]);
              }
            }
            if (isPresent(cssSelector.notSelector) && isBlank(cssSelector.element) && ListWrapper.isEmpty(cssSelector.classNames) && ListWrapper.isEmpty(cssSelector.attrs)) {
              cssSelector.element = "*";
            }
            return assert.returnType((cssSelector), CssSelector);
          }});
      }()));
      Object.defineProperty(CssSelector.parse, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(CssSelector.prototype.setElement, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(CssSelector.prototype.addAttribute, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(CssSelector.prototype.addClassName, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      SelectorMatcher = $__export("SelectorMatcher", (function() {
        var SelectorMatcher = function SelectorMatcher() {
          this._elementMap = MapWrapper.create();
          this._elementPartialMap = MapWrapper.create();
          this._classMap = MapWrapper.create();
          this._classPartialMap = MapWrapper.create();
          this._attrValueMap = MapWrapper.create();
          this._attrValuePartialMap = MapWrapper.create();
        };
        return ($traceurRuntime.createClass)(SelectorMatcher, {
          addSelectable: function(cssSelector, callbackCtxt) {
            assert.argumentTypes(cssSelector, CssSelector, callbackCtxt, assert.type.any);
            var matcher = this;
            var element = cssSelector.element;
            var classNames = cssSelector.classNames;
            var attrs = cssSelector.attrs;
            var selectable = new SelectorContext(cssSelector, callbackCtxt);
            if (isPresent(element)) {
              var isTerminal = attrs.length === 0 && classNames.length === 0;
              if (isTerminal) {
                this._addTerminal(matcher._elementMap, element, selectable);
              } else {
                matcher = this._addPartial(matcher._elementPartialMap, element);
              }
            }
            if (isPresent(classNames)) {
              for (var index = 0; index < classNames.length; index++) {
                var isTerminal = attrs.length === 0 && index === classNames.length - 1;
                var className = classNames[index];
                if (isTerminal) {
                  this._addTerminal(matcher._classMap, className, selectable);
                } else {
                  matcher = this._addPartial(matcher._classPartialMap, className);
                }
              }
            }
            if (isPresent(attrs)) {
              for (var index = 0; index < attrs.length; ) {
                var isTerminal = index === attrs.length - 2;
                var attrName = attrs[index++];
                var attrValue = attrs[index++];
                var map = isTerminal ? matcher._attrValueMap : matcher._attrValuePartialMap;
                var valuesMap = MapWrapper.get(map, attrName);
                if (isBlank(valuesMap)) {
                  valuesMap = MapWrapper.create();
                  MapWrapper.set(map, attrName, valuesMap);
                }
                if (isTerminal) {
                  this._addTerminal(valuesMap, attrValue, selectable);
                } else {
                  matcher = this._addPartial(valuesMap, attrValue);
                }
              }
            }
          },
          _addTerminal: function(map, name, selectable) {
            assert.argumentTypes(map, assert.genericType(Map, assert.type.string, assert.type.string), name, assert.type.string, selectable, assert.type.any);
            var terminalList = MapWrapper.get(map, name);
            if (isBlank(terminalList)) {
              terminalList = ListWrapper.create();
              MapWrapper.set(map, name, terminalList);
            }
            ListWrapper.push(terminalList, selectable);
          },
          _addPartial: function(map, name) {
            assert.argumentTypes(map, assert.genericType(Map, assert.type.string, assert.type.string), name, assert.type.string);
            var matcher = MapWrapper.get(map, name);
            if (isBlank(matcher)) {
              matcher = new SelectorMatcher();
              MapWrapper.set(map, name, matcher);
            }
            return matcher;
          },
          match: function(cssSelector, matchedCallback) {
            assert.argumentTypes(cssSelector, CssSelector, matchedCallback, Function);
            var result = false;
            var element = cssSelector.element;
            var classNames = cssSelector.classNames;
            var attrs = cssSelector.attrs;
            result = this._matchTerminal(this._elementMap, element, cssSelector, matchedCallback) || result;
            result = this._matchPartial(this._elementPartialMap, element, cssSelector, matchedCallback) || result;
            if (isPresent(classNames)) {
              for (var index = 0; index < classNames.length; index++) {
                var className = classNames[index];
                result = this._matchTerminal(this._classMap, className, cssSelector, matchedCallback) || result;
                result = this._matchPartial(this._classPartialMap, className, cssSelector, matchedCallback) || result;
              }
            }
            if (isPresent(attrs)) {
              for (var index = 0; index < attrs.length; ) {
                var attrName = attrs[index++];
                var attrValue = attrs[index++];
                var valuesMap = MapWrapper.get(this._attrValueMap, attrName);
                if (!StringWrapper.equals(attrValue, _EMPTY_ATTR_VALUE)) {
                  result = this._matchTerminal(valuesMap, _EMPTY_ATTR_VALUE, cssSelector, matchedCallback) || result;
                }
                result = this._matchTerminal(valuesMap, attrValue, cssSelector, matchedCallback) || result;
                valuesMap = MapWrapper.get(this._attrValuePartialMap, attrName);
                result = this._matchPartial(valuesMap, attrValue, cssSelector, matchedCallback) || result;
              }
            }
            return assert.returnType((result), assert.type.boolean);
          },
          _matchTerminal: function() {
            var map = arguments[0] !== (void 0) ? arguments[0] : null;
            var name = arguments[1];
            var cssSelector = arguments[2];
            var matchedCallback = arguments[3];
            assert.argumentTypes(map, assert.genericType(Map, assert.type.string, assert.type.string), name, assert.type.any, cssSelector, assert.type.any, matchedCallback, assert.type.any);
            if (isBlank(map) || isBlank(name)) {
              return assert.returnType((false), assert.type.boolean);
            }
            var selectables = MapWrapper.get(map, name);
            var starSelectables = MapWrapper.get(map, "*");
            if (isPresent(starSelectables)) {
              selectables = ListWrapper.concat(selectables, starSelectables);
            }
            if (isBlank(selectables)) {
              return assert.returnType((false), assert.type.boolean);
            }
            var selectable;
            var result = false;
            for (var index = 0; index < selectables.length; index++) {
              selectable = selectables[index];
              result = selectable.finalize(cssSelector, matchedCallback) || result;
            }
            return assert.returnType((result), assert.type.boolean);
          },
          _matchPartial: function() {
            var map = arguments[0] !== (void 0) ? arguments[0] : null;
            var name = arguments[1];
            var cssSelector = arguments[2];
            var matchedCallback = arguments[3];
            assert.argumentTypes(map, assert.genericType(Map, assert.type.string, assert.type.string), name, assert.type.any, cssSelector, assert.type.any, matchedCallback, assert.type.any);
            if (isBlank(map) || isBlank(name)) {
              return assert.returnType((false), assert.type.boolean);
            }
            var nestedSelector = MapWrapper.get(map, name);
            if (isBlank(nestedSelector)) {
              return assert.returnType((false), assert.type.boolean);
            }
            return assert.returnType((nestedSelector.match(cssSelector, matchedCallback)), assert.type.boolean);
          }
        }, {});
      }()));
      Object.defineProperty(SelectorMatcher.prototype.addSelectable, "parameters", {get: function() {
          return [[CssSelector], []];
        }});
      Object.defineProperty(SelectorMatcher.prototype._addTerminal, "parameters", {get: function() {
          return [[assert.genericType(Map, assert.type.string, assert.type.string)], [assert.type.string], []];
        }});
      Object.defineProperty(SelectorMatcher.prototype._addPartial, "parameters", {get: function() {
          return [[assert.genericType(Map, assert.type.string, assert.type.string)], [assert.type.string]];
        }});
      Object.defineProperty(SelectorMatcher.prototype.match, "parameters", {get: function() {
          return [[CssSelector], [Function]];
        }});
      Object.defineProperty(SelectorMatcher.prototype._matchTerminal, "parameters", {get: function() {
          return [[assert.genericType(Map, assert.type.string, assert.type.string)], [], [], []];
        }});
      Object.defineProperty(SelectorMatcher.prototype._matchPartial, "parameters", {get: function() {
          return [[assert.genericType(Map, assert.type.string, assert.type.string)], [], [], []];
        }});
      SelectorContext = (function() {
        var SelectorContext = function SelectorContext(selector, cbContext) {
          assert.argumentTypes(selector, CssSelector, cbContext, assert.type.any);
          this.selector = selector;
          this.notSelector = selector.notSelector;
          this.cbContext = cbContext;
        };
        return ($traceurRuntime.createClass)(SelectorContext, {finalize: function(cssSelector, callback) {
            assert.argumentTypes(cssSelector, CssSelector, callback, assert.type.any);
            var result = true;
            if (isPresent(this.notSelector)) {
              var notMatcher = new SelectorMatcher();
              notMatcher.addSelectable(this.notSelector, null);
              result = !notMatcher.match(cssSelector, null);
            }
            if (result && isPresent(callback)) {
              callback(this.selector, this.cbContext);
            }
            return result;
          }}, {});
      }());
      Object.defineProperty(SelectorContext, "parameters", {get: function() {
          return [[CssSelector], []];
        }});
      Object.defineProperty(SelectorContext.prototype.finalize, "parameters", {get: function() {
          return [[CssSelector], []];
        }});
    }
  };
});

//# sourceMappingURL=angular2/src/core/compiler/selector.map

//# sourceMappingURL=../../../../angular2/src/core/compiler/selector.js.map