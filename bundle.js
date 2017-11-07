/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const artist_model_1 = __webpack_require__(1);
const form_controller_1 = __webpack_require__(3);
// Initialize form object
let form = new form_controller_1.Form();
//Add Events
//Add artist on click event
document.getElementById("btnAddArtist").addEventListener("click", function () {
    let name = document.getElementById("inputName");
    let image = document.getElementById("inputImage");
    let url = document.getElementById("inputUrl");
    let art = new artist_model_1.Artist(name.value, image.value, url.value);
    if (form.addArtist(art)) {
        // In case of a successful add of an artist, delete message
        document.getElementById("spnRes").innerHTML = "";
        //Draw new video div on screen
        let VideoHtml = document.createElement("div");
        VideoHtml.className = "video col-sm-4";
        VideoHtml.innerHTML = `    							
		    					 <div class="form-group row noMarginBottom borderGray1Px margin1px">
									<div class="form-group col-sm-4 textAlignLeft noMarginBottom">
										<img class="video-img imgCircle" alt="Artist Image" src="${art.image}">
									</div>
									<div class="form-group col-sm-8 textAlignLeft noMarginBottom">
										<div class="row">
											<label class="col-sm-12">${art.name}</label>
											<a class="col-sm-12" href="${art.youtubeUrl}">watch youtube video</a>
										</div>
									</div>
								</div>
							  `;
        document.getElementById("videoContainer").appendChild(VideoHtml);
    } // end if form.addArtist(art)
    else {
        document.getElementById("spnRes").innerHTML = "Please Fill All Fields";
        document.getElementById("spnRes").style.color = "red";
    }
});
//Clear Form on click event
document.getElementById("btnClear").addEventListener("click", function () {
    document.getElementById("inputName").value = "";
    document.getElementById("inputImage").value = "";
    document.getElementById("inputUrl").value = "";
    document.getElementById("spnRes").innerHTML = "";
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Artist {
    constructor(name, image, url) {
        this.name = name;
        this.image = image;
        this.youtubeUrl = url;
    }
}
exports.Artist = Artist;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class ArtistsList {
    constructor() {
        this.List = [];
    }
}
exports.ArtistsList = ArtistsList;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const list_controller_1 = __webpack_require__(2);
const form_util_1 = __webpack_require__(4);
class Form {
    constructor() {
        this.formList = new list_controller_1.ArtistsList();
    }
    addArtist(artist) {
        let res = false;
        let validator = new form_util_1.Validator();
        if (validator.isValidArtist(artist)) {
            res = true;
            this.formList.List.push(artist);
        }
        return res;
    }
}
exports.Form = Form;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class Validator {
    isValidArtist(artist) {
        return this.checkStringHasValue(artist.name) && this.checkStringHasValue(artist.image) && this.checkStringHasValue(artist.youtubeUrl);
    }
    checkStringHasValue(str) {
        return (str != null && typeof str != 'undefined' && str.length > 0);
    }
}
exports.Validator = Validator;


/***/ })
/******/ ]);