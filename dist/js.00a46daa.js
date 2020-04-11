// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/index.js":[function(require,module,exports) {
var header = document.querySelector("header");
var menuitem = document.querySelectorAll(".menuitem");
var sectionContainer = document.querySelector(".section-container");
var sectionList = document.querySelectorAll(".sectionList");
var closeList = document.querySelector(".closeList"); // const objitem =[
//     {
//         id:1,
//         name: "아이스 체리 블라썸",
//         check: false,
//         img: "./img/SVG/Ice/01_Ice_Cherry_Blossom_Latte.svg"
//     },
//     {
//         id:2,
//         name: "핫 체리 블라썸",
//         check: false,
//         img: "./img/SVG/Hot/02_hot_Cherry_Blossom_Latte.svg"
//     },
//     {
//         id:3,
//         name: "아이스 브라우니 쇼콜라",
//         check: false,
//         img: "./img/SVG/Hot/03_Ice_Brownie_Chocolate.svg"
//     },
//     {
//         id:4,
//         name: "핫 브라우니 쇼콜라",
//         check: false,
//         img: "./img/SVG/Hot/04_Hot_Brownie_Chocolate.svg"
//     },
//     {
//         id:5,
//         name: "제주청귤 오리지널",
//         check: false,
//         img: "./img/SVG/Tangerine/05_Jeju_Green_Tangerine_Tea.svg"
//     },
//     {
//         id:6,
//         name: "제주청귤 블라썸",
//         check: false,
//         img: "./img/SVG/Tangerine/06-Jeju_Green_Tangerine_Blossom.svg"
//     },
//     {
//         id:7,
//         name: "석류 오리지널",
//         check: false,
//         img: "./img/SVG/Pomegranate/07_Pomegranate_Tea.svg"
//     },
//     {
//         id:8,
//         name: "석류 애플라임",
//         check: false,
//         img: "./img/SVG/Pomegranate/08_Pomegranate_Apple_Lime.svg"
//     }
// ]

closeList.addEventListener("click", function (event) //화살표 눌러서 빠져나오도록 구현
{
  closeList.classList.toggle("active");
  sectionContainer.classList.toggle("active");
  Array.from(sectionList).forEach(function (sectionList) {
    if (sectionList.classList == "sectionList List1 active") {
      sectionList.classList.toggle("active");
    } else if (sectionList.classList == "sectionList List2 active") {
      sectionList.classList.toggle("active");
    }

    if (sectionList.classList == "sectionList List3 active") {
      sectionList.classList.toggle("active");
    } else if (sectionList.classList == "sectionList List4 active") {
      sectionList.classList.toggle("active");
    }

    if (sectionList.classList == "sectionList List5 active") {
      sectionList.classList.toggle("active");
    } else if (sectionList.classList == "sectionList List6 active") {
      sectionList.classList.toggle("active");
    }

    if (sectionList.classList == "sectionList List7 active") {
      sectionList.classList.toggle("active");
    } else if (sectionList.classList == "sectionList List8 active") {
      sectionList.classList.toggle("active");
    } else {
      console.log("너무 하드코딩이지만 일단 성공");
    }
  }); // Array.from(sectionList).forEach(sectionList => sectionList.classList.toggle("active"));
});
Array.from(menuitem).forEach(function (item) {
  return item.addEventListener("click", function (event) //아이템 클릭 영역
  {
    var checkText = event.target.firstElementChild.innerText;

    switch (checkText) {
      case "아이스 체리 블라썸":
        sectionList[0].classList.toggle("active");
        break;

      case "핫 체리 블라썸":
        sectionList[1].classList.toggle("active");
        break;

      case "아이스 브라우니 쇼콜라":
        sectionList[2].classList.toggle("active");
        break;

      case "핫 브라우니 쇼콜라":
        sectionList[3].classList.toggle("active");
        break;

      case "제주청귤 오리지널":
        sectionList[4].classList.toggle("active");
        break;

      case "제주청귤 블라썸":
        sectionList[5].classList.toggle("active");
        break;

      case "석류 오리지널":
        sectionList[6].classList.toggle("active");
        break;

      case "석류 애플라임":
        sectionList[7].classList.toggle("active");
        break;

      default:
        console.log("놉");
    }

    item.classList.toggle("active");
  });
});
window.addEventListener("scroll", function () //스크롤 좌표
{
  header.classList.toggle("sticky", window.scrollY > 0);
});

function toggle(e) //헤더 네비 토글
{
  header.classList.toggle("active");
}

window.addEventListener("keydown", function (event) //키 상호작용
{
  switch (event.keyCode) {
    case 9:
      //텝
      console.log("텝 눌림");
      break;

    case 27:
      //esc
      console.log("esc 눌림");
      break;

    case 37:
      //좌측 화살표
      console.log("좌측 눌림");
      break;

    case 38:
      //위 화살표
      console.log("위 눌림");
      break;

    case 39:
      //우측 화살표
      console.log("우측 눌림");
      break;

    case 40:
      //아래 화살표
      console.log("아래 눌림");
      break;

    case 13:
      //엔터
      console.log("엔터 눌림");
      break;

    case 16:
      //시프트
      console.log("시프트 눌림");
      break;

    default:
      console.log("놉");
  }
});
},{}],"../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59444" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map