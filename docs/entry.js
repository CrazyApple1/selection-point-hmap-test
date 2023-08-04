(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('hel-lib-proxy')) :
  typeof define === 'function' && define.amd ? define(['exports', 'hel-lib-proxy'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["hel-tpl-remote-vue-comps"] = {}, global.helLibProxy));
})(this, (function (exports, helLibProxy) { 'use strict';

  /*
  |--------------------------------------------------------------------------
  |
  | 对应 package.json/appGroupName
  |
  |--------------------------------------------------------------------------
  */

  const LIB_NAME = 'hel-tpl-remote-vue-comps';

  /*
  |--------------------------------------------------------------------------
  |
  | 组件类型导出文件，同时也作为 rollup 的打包入口文件，因只提供类型，rollup 打包后是一个
  | 仅包含 hel-lib-proxy 的空壳文件，对模块使用方的包体构建大小无影响
  | 模块使用方 通过 npm i xxx-lib 后，只要在头文件处执行过 preFetchLib
  | 则整个项目项使用本地模块一样载入提供方的组件，并可以点击到 node_modules 查看源码
  |
  |--------------------------------------------------------------------------
  */
  /**
   * 将提供给用户的lib暴露出去（同时也暴露了类型）
   */
  var dtlib = helLibProxy.exposeLib(LIB_NAME);

  exports["default"] = dtlib;
  exports.dtlib = dtlib;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
