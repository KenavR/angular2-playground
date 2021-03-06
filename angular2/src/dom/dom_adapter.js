System.register(["rtts_assert/rtts_assert", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var assert,
      ABSTRACT,
      BaseException,
      DOM,
      DomAdapter;
  function setRootDomAdapter(adapter) {
    assert.argumentTypes(adapter, DomAdapter);
    $__export("DOM", DOM = adapter);
  }
  function _abstract() {
    return new BaseException('This method is abstract');
  }
  $__export("setRootDomAdapter", setRootDomAdapter);
  return {
    setters: [function($__m) {
      assert = $__m.assert;
    }, function($__m) {
      ABSTRACT = $__m.ABSTRACT;
      BaseException = $__m.BaseException;
    }],
    execute: function() {
      DOM = $__export("DOM", DOM);
      Object.defineProperty(setRootDomAdapter, "parameters", {get: function() {
          return [[DomAdapter]];
        }});
      DomAdapter = $__export("DomAdapter", (function() {
        var DomAdapter = function DomAdapter() {};
        return ($traceurRuntime.createClass)(DomAdapter, {
          get attrToPropMap() {
            throw _abstract();
          },
          parse: function(templateHtml) {
            assert.argumentTypes(templateHtml, assert.type.string);
            throw _abstract();
          },
          query: function(selector) {
            assert.argumentTypes(selector, assert.type.string);
            throw _abstract();
          },
          querySelector: function(el, selector) {
            assert.argumentTypes(el, assert.type.any, selector, assert.type.string);
            throw _abstract();
          },
          querySelectorAll: function(el, selector) {
            assert.argumentTypes(el, assert.type.any, selector, assert.type.string);
            throw _abstract();
          },
          on: function(el, evt, listener) {
            throw _abstract();
          },
          dispatchEvent: function(el, evt) {
            throw _abstract();
          },
          createMouseEvent: function(eventType) {
            throw _abstract();
          },
          createEvent: function(eventType) {
            throw _abstract();
          },
          getInnerHTML: function(el) {
            throw _abstract();
          },
          getOuterHTML: function(el) {
            throw _abstract();
          },
          nodeName: function(node) {
            throw _abstract();
          },
          nodeValue: function(node) {
            throw _abstract();
          },
          type: function(node) {
            throw _abstract();
          },
          content: function(node) {
            throw _abstract();
          },
          firstChild: function(el) {
            throw _abstract();
          },
          nextSibling: function(el) {
            throw _abstract();
          },
          parentElement: function(el) {
            throw _abstract();
          },
          childNodes: function(el) {
            throw _abstract();
          },
          childNodesAsList: function(el) {
            throw _abstract();
          },
          clearNodes: function(el) {
            throw _abstract();
          },
          appendChild: function(el, node) {
            throw _abstract();
          },
          removeChild: function(el, node) {
            throw _abstract();
          },
          remove: function(el) {
            throw _abstract();
          },
          insertBefore: function(el, node) {
            throw _abstract();
          },
          insertAllBefore: function(el, nodes) {
            throw _abstract();
          },
          insertAfter: function(el, node) {
            throw _abstract();
          },
          setInnerHTML: function(el, value) {
            throw _abstract();
          },
          getText: function(el) {
            throw _abstract();
          },
          setText: function(el, value) {
            assert.argumentTypes(el, assert.type.any, value, assert.type.string);
            throw _abstract();
          },
          getValue: function(el) {
            throw _abstract();
          },
          setValue: function(el, value) {
            assert.argumentTypes(el, assert.type.any, value, assert.type.string);
            throw _abstract();
          },
          getChecked: function(el) {
            throw _abstract();
          },
          setChecked: function(el, value) {
            assert.argumentTypes(el, assert.type.any, value, assert.type.boolean);
            throw _abstract();
          },
          createTemplate: function(html) {
            throw _abstract();
          },
          createElement: function(tagName) {
            var doc = arguments[1] !== (void 0) ? arguments[1] : null;
            throw _abstract();
          },
          createTextNode: function(text) {
            var doc = arguments[1] !== (void 0) ? arguments[1] : null;
            assert.argumentTypes(text, assert.type.string, doc, assert.type.any);
            throw _abstract();
          },
          createScriptTag: function(attrName, attrValue) {
            var doc = arguments[2] !== (void 0) ? arguments[2] : null;
            assert.argumentTypes(attrName, assert.type.string, attrValue, assert.type.string, doc, assert.type.any);
            throw _abstract();
          },
          createStyleElement: function(css) {
            var doc = arguments[1] !== (void 0) ? arguments[1] : null;
            assert.argumentTypes(css, assert.type.string, doc, assert.type.any);
            throw _abstract();
          },
          createShadowRoot: function(el) {
            throw _abstract();
          },
          getShadowRoot: function(el) {
            throw _abstract();
          },
          clone: function(node) {
            throw _abstract();
          },
          hasProperty: function(element, name) {
            assert.argumentTypes(element, assert.type.any, name, assert.type.string);
            throw _abstract();
          },
          getElementsByClassName: function(element, name) {
            assert.argumentTypes(element, assert.type.any, name, assert.type.string);
            throw _abstract();
          },
          getElementsByTagName: function(element, name) {
            assert.argumentTypes(element, assert.type.any, name, assert.type.string);
            throw _abstract();
          },
          classList: function(element) {
            throw _abstract();
          },
          addClass: function(element, classname) {
            assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
            throw _abstract();
          },
          removeClass: function(element, classname) {
            assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
            throw _abstract();
          },
          hasClass: function(element, classname) {
            assert.argumentTypes(element, assert.type.any, classname, assert.type.string);
            throw _abstract();
          },
          setStyle: function(element, stylename, stylevalue) {
            assert.argumentTypes(element, assert.type.any, stylename, assert.type.string, stylevalue, assert.type.string);
            throw _abstract();
          },
          removeStyle: function(element, stylename) {
            assert.argumentTypes(element, assert.type.any, stylename, assert.type.string);
            throw _abstract();
          },
          getStyle: function(element, stylename) {
            assert.argumentTypes(element, assert.type.any, stylename, assert.type.string);
            throw _abstract();
          },
          tagName: function(element) {
            throw _abstract();
          },
          attributeMap: function(element) {
            throw _abstract();
          },
          getAttribute: function(element, attribute) {
            assert.argumentTypes(element, assert.type.any, attribute, assert.type.string);
            throw _abstract();
          },
          setAttribute: function(element, name, value) {
            assert.argumentTypes(element, assert.type.any, name, assert.type.string, value, assert.type.string);
            throw _abstract();
          },
          removeAttribute: function(element, attribute) {
            assert.argumentTypes(element, assert.type.any, attribute, assert.type.string);
            throw _abstract();
          },
          templateAwareRoot: function(el) {
            throw _abstract();
          },
          createHtmlDocument: function() {
            throw _abstract();
          },
          defaultDoc: function() {
            throw _abstract();
          },
          getTitle: function() {
            throw _abstract();
          },
          setTitle: function(newTitle) {
            assert.argumentTypes(newTitle, assert.type.string);
            throw _abstract();
          },
          elementMatches: function(n, selector) {
            assert.argumentTypes(n, assert.type.any, selector, assert.type.string);
            throw _abstract();
          },
          isTemplateElement: function(el) {
            assert.argumentTypes(el, assert.type.any);
            throw _abstract();
          },
          isTextNode: function(node) {
            throw _abstract();
          },
          isCommentNode: function(node) {
            throw _abstract();
          },
          isElementNode: function(node) {
            throw _abstract();
          },
          hasShadowRoot: function(node) {
            throw _abstract();
          },
          importIntoDoc: function(node) {
            throw _abstract();
          },
          isPageRule: function(rule) {
            throw _abstract();
          },
          isStyleRule: function(rule) {
            throw _abstract();
          },
          isMediaRule: function(rule) {
            throw _abstract();
          },
          isKeyframesRule: function(rule) {
            throw _abstract();
          },
          getHref: function(element) {
            throw _abstract();
          },
          resolveAndSetHref: function(element, baseUrl, href) {
            assert.argumentTypes(element, assert.type.any, baseUrl, assert.type.string, href, assert.type.string);
            throw _abstract();
          },
          cssToRules: function(css) {
            assert.argumentTypes(css, assert.type.string);
            throw _abstract();
          }
        }, {});
      }()));
      Object.defineProperty(DomAdapter, "annotations", {get: function() {
          return [new ABSTRACT()];
        }});
      Object.defineProperty(DomAdapter.prototype.parse, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.query, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.querySelector, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.querySelectorAll, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.setText, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.setValue, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.setChecked, "parameters", {get: function() {
          return [[], [assert.type.boolean]];
        }});
      Object.defineProperty(DomAdapter.prototype.createTextNode, "parameters", {get: function() {
          return [[assert.type.string], []];
        }});
      Object.defineProperty(DomAdapter.prototype.createScriptTag, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string], []];
        }});
      Object.defineProperty(DomAdapter.prototype.createStyleElement, "parameters", {get: function() {
          return [[assert.type.string], []];
        }});
      Object.defineProperty(DomAdapter.prototype.hasProperty, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.getElementsByClassName, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.getElementsByTagName, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.addClass, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.removeClass, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.hasClass, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.setStyle, "parameters", {get: function() {
          return [[], [assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.removeStyle, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.getStyle, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.getAttribute, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.setAttribute, "parameters", {get: function() {
          return [[], [assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.removeAttribute, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.setTitle, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.elementMatches, "parameters", {get: function() {
          return [[], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.isTemplateElement, "parameters", {get: function() {
          return [[assert.type.any]];
        }});
      Object.defineProperty(DomAdapter.prototype.resolveAndSetHref, "parameters", {get: function() {
          return [[], [assert.type.string], [assert.type.string]];
        }});
      Object.defineProperty(DomAdapter.prototype.cssToRules, "parameters", {get: function() {
          return [[assert.type.string]];
        }});
    }
  };
});

//# sourceMappingURL=angular2/src/dom/dom_adapter.map

//# sourceMappingURL=../../../angular2/src/dom/dom_adapter.js.map