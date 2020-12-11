module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 932:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const core = __webpack_require__(396);
const newman = __webpack_require__(35);

init();

async function init() {
  try {
    const get = core.getInput;
    const apiBase = 'https://api.getpostman.com';
    const idRegex = /^[0-9]{7}-\w{8}-\w{4}-\w{4}-\w{4}-\w{12}$/;

    const options = {
      postmanApiKey: '?apikey=' + get('postmanApiKey'),
      collection: get('collection'),
      environment: get('environment'),
      globals: get('globals'),
      iterationCount: Number(get('iterationCount')),
      iterationData: get('iterationData'),
      exportGlobals: get('exportGlobals'),
      folder: get('folder').split(','),
      workingDir: get('workingDir'),
      insecureFileRead: JSON.parse(get('insecureFileRead')),
      timeout: Number(get('timeout')),
      timeoutRequest: Number(get('timeoutRequest')),
      timeoutScript: Number(get('timeoutScript')),
      delayRequest: Number(get('delayRequest')),
      ignoreRedirects: JSON.parse(get('ignoreRedirects')),
      insecure: JSON.parse(get('insecure')),
      bail: JSON.parse(get('bail')),
      suppressExitCode: JSON.parse(get('suppressExitCode')),
      reporters: get('reporters').split(','),
      reporter: JSON.parse(get('reporter') || null),
      color: get('color'),
      sslClientCert: get('sslClientCert'),
      sslClientKey: get('sslClientKey'),
      sslClientPassphrase: get('sslClientPassphrase'),
    };

    if (!options.postmanApiKey) {
      core.warn('No Postman API key provided.');
    }

    if (options.collection.match(idRegex)) {
      options.collection = `${apiBase}/collections/${options.collection}${options.postmanApiKey}`;
    }

    if (options.environment.match(idRegex)) {
      options.environment = `${apiBase}/environments/${options.environment}${options.postmanApiKey}`;
    }

    if (options.globals) {
      try {
        options.globals = JSON.parse(options.globals);
      } catch (e) {}
    }

    runNewman(options);
  } catch (error) {
    core.setFailed(error.message);
  }
}

function runNewman(options) {
  newman.run(options).on('done', (err, summary) => {
    if (err || summary.run.failures.length) {
      core.setFailed('Newman run failed!' + (err || ''));
    }
  });
}


/***/ }),

/***/ 396:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 35:
/***/ ((module) => {

module.exports = eval("require")("newman");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__webpack_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(932);
/******/ })()
;