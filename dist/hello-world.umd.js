(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, global['@toyjhlee/hello-world'] = factory());
}(this, (function () { 'use strict';

	var main = (function () {
	  return 'Hello, world!';
	});

	return main;

})));
