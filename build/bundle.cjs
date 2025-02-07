/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers/genres.ts":
/*!***********************************!*\
  !*** ./src/controllers/genres.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const genres_1 = __importDefault(__webpack_require__(/*! @/crawler/genres */ "./src/crawler/genres.ts"));
const tsoa_1 = __webpack_require__(/*! tsoa */ "tsoa");
let GenresController = class GenresController extends tsoa_1.Controller {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const genres = yield (0, genres_1.default)();
            if (genres.length > 0)
                return genres;
            return [];
        });
    }
    valid(genreId) {
        return __awaiter(this, void 0, void 0, function* () {
            const genres = yield this.getAll();
            const genre = genres.find(genre => genre.id === genreId);
            if (genre)
                return genre;
            return {};
        });
    }
};
__decorate([
    (0, tsoa_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GenresController.prototype, "getAll", null);
GenresController = __decorate([
    (0, tsoa_1.Route)('genre'),
    (0, tsoa_1.Tags)('Genre')
], GenresController);
exports["default"] = GenresController;


/***/ }),

/***/ "./src/controllers/novel.ts":
/*!**********************************!*\
  !*** ./src/controllers/novel.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const novel_1 = __importDefault(__webpack_require__(/*! @/crawler/novel */ "./src/crawler/novel/index.ts"));
const list_1 = __importDefault(__webpack_require__(/*! @/crawler/novel/chapter/list */ "./src/crawler/novel/chapter/list.ts"));
const read_1 = __importDefault(__webpack_require__(/*! @/crawler/novel/chapter/read */ "./src/crawler/novel/chapter/read.ts"));
const info_1 = __importDefault(__webpack_require__(/*! @/crawler/novel/info */ "./src/crawler/novel/info.ts"));
const tsoa_1 = __webpack_require__(/*! tsoa */ "tsoa");
let NovelController = class NovelController extends tsoa_1.Controller {
    getFirstPage() {
        return __awaiter(this, void 0, void 0, function* () {
            const novels = yield (0, novel_1.default)('full');
            if (novels.length > 0)
                return novels;
            return [];
        });
    }
    getPage(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const novels = yield (0, novel_1.default)('full', page);
            if (novels.length > 0)
                return novels;
            return [];
        });
    }
    getNewFirstPage() {
        return __awaiter(this, void 0, void 0, function* () {
            const novels = yield (0, novel_1.default)('new');
            if (novels.length > 0)
                return novels;
            return [];
        });
    }
    getNewPage(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const novels = yield (0, novel_1.default)('new', page);
            if (novels.length > 0)
                return novels;
            return [];
        });
    }
    getHotFirstPage() {
        return __awaiter(this, void 0, void 0, function* () {
            const novels = yield (0, novel_1.default)('hot');
            if (novels.length > 0)
                return novels;
            return [];
        });
    }
    getHotPage(page) {
        return __awaiter(this, void 0, void 0, function* () {
            const novels = yield (0, novel_1.default)('hot', page);
            if (novels.length > 0)
                return novels;
            return [];
        });
    }
    getGenreFirstPage(genre) {
        return __awaiter(this, void 0, void 0, function* () {
            const novels = yield (0, novel_1.default)('genre', 1, genre);
            if (novels.length > 0)
                return novels;
            return [];
        });
    }
    getGenrePage(genre, page) {
        return __awaiter(this, void 0, void 0, function* () {
            const novels = yield (0, novel_1.default)('genre', page, genre);
            if (novels.length > 0)
                return novels;
            return [];
        });
    }
    getNovel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const novel = yield (0, info_1.default)(id);
            if (novel)
                return novel;
            return {};
        });
    }
    getChapter(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const chapter = yield (0, list_1.default)(id);
            return chapter;
        });
    }
    readChapter(id, chapter) {
        return __awaiter(this, void 0, void 0, function* () {
            const read = yield (0, read_1.default)(id, chapter);
            return read;
        });
    }
};
__decorate([
    (0, tsoa_1.Get)('/'),
    (0, tsoa_1.Tags)('Novel', 'All'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getFirstPage", null);
__decorate([
    (0, tsoa_1.Get)('/trang-{page}'),
    (0, tsoa_1.Tags)('Novel', 'All'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getPage", null);
__decorate([
    (0, tsoa_1.Get)('/new'),
    (0, tsoa_1.Tags)('Novel', 'New Novel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getNewFirstPage", null);
__decorate([
    (0, tsoa_1.Get)('/new/{page}'),
    (0, tsoa_1.Tags)('Novel', 'New Novel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getNewPage", null);
__decorate([
    (0, tsoa_1.Get)('/hot'),
    (0, tsoa_1.Tags)('Novel', 'Hot Novel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getHotFirstPage", null);
__decorate([
    (0, tsoa_1.Get)('/hot/trang-{page}'),
    (0, tsoa_1.Tags)('Novel', 'Hot Novel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getHotPage", null);
__decorate([
    (0, tsoa_1.Get)('/genre/{genre}'),
    (0, tsoa_1.Tags)('Novel', 'Filter Novel by Genre'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getGenreFirstPage", null);
__decorate([
    (0, tsoa_1.Get)('/genre/{genre}/trang-{page}'),
    (0, tsoa_1.Tags)('Novel', 'Filter Novel by Genre'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getGenrePage", null);
__decorate([
    (0, tsoa_1.Get)('/{id}'),
    (0, tsoa_1.Tags)('Novel', 'Detail Novel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getNovel", null);
__decorate([
    (0, tsoa_1.Get)('/{id}/chapter'),
    (0, tsoa_1.Tags)('Novel', 'Novel Chapter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "getChapter", null);
__decorate([
    (0, tsoa_1.Get)('/{id}/chapter/{chapter}'),
    (0, tsoa_1.Tags)('Novel', 'Read Novel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], NovelController.prototype, "readChapter", null);
NovelController = __decorate([
    (0, tsoa_1.Route)('novel'),
    (0, tsoa_1.Tags)('Novel')
], NovelController);
exports["default"] = NovelController;


/***/ }),

/***/ "./src/crawler/genres.ts":
/*!*******************************!*\
  !*** ./src/crawler/genres.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = Genres;
const instance_1 = __importDefault(__webpack_require__(/*! @/lib/instance */ "./src/lib/instance.ts"));
const string2html_1 = __importDefault(__webpack_require__(/*! @/lib/string2html */ "./src/lib/string2html.ts"));
function Genres() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { data: homeString } = yield instance_1.default.get('/');
            const homeHTML = yield (0, string2html_1.default)(homeString);
            const genres = homeHTML.querySelectorAll('.multi-column > div:nth-child(1) a');
            const genresArray = Array.from(genres).map(option => {
                var _a;
                return ({
                    name: option.text,
                    id: (_a = option.href.split('/')[option.href.split('/').length - 2]) !== null && _a !== void 0 ? _a : '',
                });
            });
            return genresArray;
        }
        catch (error) {
            console.error(error);
            return [];
        }
    });
}


/***/ }),

/***/ "./src/crawler/novel/chapter/list.ts":
/*!*******************************************!*\
  !*** ./src/crawler/novel/chapter/list.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = NovelChapter;
const instance_1 = __importDefault(__webpack_require__(/*! @/lib/instance */ "./src/lib/instance.ts"));
const string2html_1 = __importDefault(__webpack_require__(/*! @/lib/string2html */ "./src/lib/string2html.ts"));
const dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ "dotenv"));
const api_json_1 = __importDefault(__webpack_require__(/*! @/crawler/json/api.json */ "./src/crawler/json/api.json"));
const axios_retry_1 = __importDefault(__webpack_require__(/*! axios-retry */ "axios-retry"));
dotenv_1.default.config();
function NovelChapter(novel_id) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        const { data: pageHTML } = yield instance_1.default.get(novel_id);
        const HTML = yield (0, string2html_1.default)(pageHTML);
        const title = HTML.title;
        const maxPage = parseInt((_d = (_b = (_a = HTML.querySelector('.pagination > li:nth-child(8) > a:nth-child(1)')) === null || _a === void 0 ? void 0 : _a.getAttribute('href')) === null || _b === void 0 ? void 0 : _b.replace(((_c = process.env.WEB_CRAWLER_URL) !== null && _c !== void 0 ? _c : '') + '/', '').split('/')[1].split('-')[1]) !== null && _d !== void 0 ? _d : '1');
        (0, axios_retry_1.default)(instance_1.default, { retries: 3 });
        const promises = Array.from({ length: maxPage }, (_, i) => instance_1.default
            .get(`${api_json_1.default.list_chapter}&tid=1&tascii=${novel_id}&tname=${title}&page=${i + 1}&totalp=${maxPage}`)
            .then(({ data: { chap_list } }) => chap_list));
        try {
            const responses = yield Promise.all(promises);
            const chaptersPromises = responses.map((stringHTML) => __awaiter(this, void 0, void 0, function* () {
                const HTML = yield (0, string2html_1.default)(stringHTML);
                return Array.from(HTML.querySelectorAll('a'));
            }));
            const chaptersHTML = yield Promise.all(chaptersPromises);
            const chapters = chaptersHTML
                .flat()
                .map((chapter, id) => {
                var _a, _b;
                const title = (_b = (_a = chapter.textContent) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : '';
                return {
                    id: id + 1,
                    title,
                };
            })
                .filter(({ title }) => title !== '');
            return chapters;
        }
        catch (error) {
            console.error('An error occurred:', error);
            return [];
        }
    });
}


/***/ }),

/***/ "./src/crawler/novel/chapter/read.ts":
/*!*******************************************!*\
  !*** ./src/crawler/novel/chapter/read.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = NovelContent;
const instance_1 = __importDefault(__webpack_require__(/*! @/lib/instance */ "./src/lib/instance.ts"));
const string2html_1 = __importDefault(__webpack_require__(/*! @/lib/string2html */ "./src/lib/string2html.ts"));
const dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ "dotenv"));
dotenv_1.default.config();
function NovelContent(novel_id, chapter) {
    return __awaiter(this, void 0, void 0, function* () {
        const { data: pageHTML } = yield instance_1.default.get(`${novel_id}/chuong-${chapter}`);
        const HTML = yield (0, string2html_1.default)(pageHTML);
        const bodyHTML = HTML.querySelector('.chapter-c');
        bodyHTML.removeChild(bodyHTML.querySelector('#ads-chapter-pc-top'));
        const content = bodyHTML.innerHTML;
        const title = HTML.querySelector('.chapter-title')
            .title;
        const prev_chapter = parseInt(HTML.querySelector('#prev_chap').title.replace('Chương ', ''));
        const next_chapter = parseInt(HTML.querySelector('#next_chap').title.replace('Chương ', ''));
        return {
            title,
            prev_chapter,
            next_chapter,
            content,
        };
    });
}


/***/ }),

/***/ "./src/crawler/novel/full.ts":
/*!***********************************!*\
  !*** ./src/crawler/novel/full.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = NovelFull;
const instance_1 = __importDefault(__webpack_require__(/*! @/lib/instance */ "./src/lib/instance.ts"));
const string2html_1 = __importDefault(__webpack_require__(/*! @/lib/string2html */ "./src/lib/string2html.ts"));
const pages_json_1 = __importDefault(__webpack_require__(/*! @/crawler/json/pages.json */ "./src/crawler/json/pages.json"));
const dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ "dotenv"));
const global_1 = __webpack_require__(/*! ./global */ "./src/crawler/novel/global.ts");
dotenv_1.default.config();
function NovelFull() {
    return __awaiter(this, arguments, void 0, function* (page = 1) {
        const { data: pageString } = yield instance_1.default.get(`${pages_json_1.default.full}/trang-${page}`);
        const pageHTML = yield (0, string2html_1.default)(pageString);
        const novels = pageHTML.querySelectorAll('div.col-sm-12:nth-child(1) > div:nth-child(2) > div.row');
        return Array.from(novels)
            .filter(novel => novel.querySelector('div.col-xs-3 > div > div.lazyimg'))
            .reduce((promise, novel) => __awaiter(this, void 0, void 0, function* () {
            yield promise;
            return [
                ...(yield promise),
                yield (0, global_1.getInfo)(novel),
            ];
        }), Promise.resolve([]));
    });
}


/***/ }),

/***/ "./src/crawler/novel/genre.ts":
/*!************************************!*\
  !*** ./src/crawler/novel/genre.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = NovelGenre;
const instance_1 = __importDefault(__webpack_require__(/*! @/lib/instance */ "./src/lib/instance.ts"));
const string2html_1 = __importDefault(__webpack_require__(/*! @/lib/string2html */ "./src/lib/string2html.ts"));
const pages_json_1 = __importDefault(__webpack_require__(/*! @/crawler/json/pages.json */ "./src/crawler/json/pages.json"));
const dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ "dotenv"));
const genres_1 = __importDefault(__webpack_require__(/*! @/controllers/genres */ "./src/controllers/genres.ts"));
const global_1 = __webpack_require__(/*! ./global */ "./src/crawler/novel/global.ts");
dotenv_1.default.config();
function NovelGenre(genreId_1) {
    return __awaiter(this, arguments, void 0, function* (genreId, page = 1) {
        const genres = new genres_1.default();
        const genreValid = yield genres.valid(genreId);
        if (!(Object.keys(genreValid).length > 0))
            return [];
        const genre = genreValid.id;
        const { data: pageString } = yield instance_1.default.get(`${pages_json_1.default.genre}/${genre}/trang-${page}`);
        const pageHTML = yield (0, string2html_1.default)(pageString);
        const novels = pageHTML.querySelectorAll('div.col-sm-12:nth-child(1) > div:nth-child(2) > div.row');
        return Array.from(novels)
            .filter(novel => novel.querySelector('div.col-xs-3 > div > div.lazyimg'))
            .reduce((promise, novel) => __awaiter(this, void 0, void 0, function* () {
            yield promise;
            return [
                ...(yield promise),
                yield (0, global_1.getInfo)(novel),
            ];
        }), Promise.resolve([]));
    });
}


/***/ }),

/***/ "./src/crawler/novel/global.ts":
/*!*************************************!*\
  !*** ./src/crawler/novel/global.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getInfo = getInfo;
const IMAGE_WIDTH = 430;
const IMAGE_HEIGHT = 624;
function getInfo(novel) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e;
        const title = (_a = novel.querySelector('div.col-xs-3 > div > div.lazyimg').getAttribute('data-alt')) !== null && _a !== void 0 ? _a : '';
        const novel_id = (_d = (_b = novel.querySelector('div.col-xs-7 > div > h3 > a')
            .getAttribute('href')) === null || _b === void 0 ? void 0 : _b.replace((_c = process.env.WEB_CRAWLER_URL) !== null && _c !== void 0 ? _c : '', '').replaceAll('/', '')) !== null && _d !== void 0 ? _d : '';
        const cover_img_url = ((_e = novel.querySelector('div.col-xs-3 > div > div.lazyimg').getAttribute('data-image')) !== null && _e !== void 0 ? _e : '').replace(/=w\d+-h\d+/, `=w${IMAGE_WIDTH}-h${IMAGE_HEIGHT}`);
        const newest_chapter = parseInt(novel.querySelector('div.col-xs-2 > div > a')
            .textContent.replace('Chương ', ''));
        return {
            cover_img_url: cover_img_url !== null && cover_img_url !== void 0 ? cover_img_url : '',
            title,
            novel_id,
            newest_chapter,
        };
    });
}


/***/ }),

/***/ "./src/crawler/novel/hot.ts":
/*!**********************************!*\
  !*** ./src/crawler/novel/hot.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = NovelHot;
const instance_1 = __importDefault(__webpack_require__(/*! @/lib/instance */ "./src/lib/instance.ts"));
const string2html_1 = __importDefault(__webpack_require__(/*! @/lib/string2html */ "./src/lib/string2html.ts"));
const pages_json_1 = __importDefault(__webpack_require__(/*! @/crawler/json/pages.json */ "./src/crawler/json/pages.json"));
const global_1 = __webpack_require__(/*! ./global */ "./src/crawler/novel/global.ts");
function NovelHot() {
    return __awaiter(this, arguments, void 0, function* (page = 1) {
        const { data: pageString } = yield instance_1.default.get(`${pages_json_1.default.hot}/trang-${page}`);
        const pageHTML = yield (0, string2html_1.default)(pageString);
        const novels = pageHTML.querySelectorAll('div.col-sm-12:nth-child(1) > div:nth-child(2) > div.row');
        return Array.from(novels).reduce((promise, novel) => __awaiter(this, void 0, void 0, function* () {
            yield promise;
            return [...(yield promise), yield (0, global_1.getInfo)(novel)];
        }), Promise.resolve([]));
    });
}


/***/ }),

/***/ "./src/crawler/novel/index.ts":
/*!************************************!*\
  !*** ./src/crawler/novel/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = NovelCrawler;
const dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ "dotenv"));
const full_1 = __importDefault(__webpack_require__(/*! ./full */ "./src/crawler/novel/full.ts"));
const new_1 = __importDefault(__webpack_require__(/*! ./new */ "./src/crawler/novel/new.ts"));
const hot_1 = __importDefault(__webpack_require__(/*! ./hot */ "./src/crawler/novel/hot.ts"));
const genre_1 = __importDefault(__webpack_require__(/*! ./genre */ "./src/crawler/novel/genre.ts"));
dotenv_1.default.config();
function NovelCrawler(type_1) {
    return __awaiter(this, arguments, void 0, function* (type, page = 1, arg = '') {
        switch (type) {
            case 'full':
                return yield (0, full_1.default)(page);
            case 'new':
                return yield (0, new_1.default)(page);
            case 'hot':
                return yield (0, hot_1.default)(page);
            case 'genre':
                return yield (0, genre_1.default)(arg, page);
            default:
                return [];
        }
    });
}


/***/ }),

/***/ "./src/crawler/novel/info.ts":
/*!***********************************!*\
  !*** ./src/crawler/novel/info.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = NovelInfo;
const instance_1 = __importDefault(__webpack_require__(/*! @/lib/instance */ "./src/lib/instance.ts"));
const string2html_1 = __importDefault(__webpack_require__(/*! @/lib/string2html */ "./src/lib/string2html.ts"));
const dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ "dotenv"));
const list_1 = __importDefault(__webpack_require__(/*! ./chapter/list */ "./src/crawler/novel/chapter/list.ts"));
const axios_retry_1 = __importDefault(__webpack_require__(/*! axios-retry */ "axios-retry"));
dotenv_1.default.config();
function NovelInfo(novel_id) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d, _e, _f, _g;
        (0, axios_retry_1.default)(instance_1.default, { retries: 5 });
        try {
            const { data: pageString } = yield instance_1.default.get(novel_id);
            const pageHTML = yield (0, string2html_1.default)(pageString);
            const title = (_b = (_a = pageHTML.querySelector('.title')) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : '';
            const cover_img_url = (_c = pageHTML
                .querySelector('.book > img:nth-child(1)')) === null || _c === void 0 ? void 0 : _c.getAttribute('src');
            const description = (_d = pageHTML.querySelector('.desc-text')) === null || _d === void 0 ? void 0 : _d.innerHTML;
            const authorHTML = pageHTML.querySelector('.info > div:nth-child(1) > a:nth-child(2)');
            const author = authorHTML === null || authorHTML === void 0 ? void 0 : authorHTML.textContent;
            const author_id = authorHTML.getAttribute('href')
                .replace((_e = process.env.WEB_CRAWLER_URL) !== null && _e !== void 0 ? _e : '', '')
                .replace('/tac-gia', '')
                .replaceAll('/', '');
            const genres = Array.from(pageHTML.querySelectorAll('.info > div:nth-child(2) > a')).map(genre => {
                var _a;
                return ({
                    name: genre.textContent,
                    id: genre.getAttribute('href')
                        .replace((_a = process.env.WEB_CRAWLER_URL) !== null && _a !== void 0 ? _a : '', '')
                        .replace('/the-loai', '')
                        .replaceAll('/', ''),
                });
            });
            const cre = (_f = pageHTML.querySelector('.source')) === null || _f === void 0 ? void 0 : _f.textContent;
            const status = (_g = pageHTML.querySelector('.text-success')) === null || _g === void 0 ? void 0 : _g.textContent;
            const chapters = yield (0, list_1.default)(novel_id);
            return {
                novel_id,
                title,
                cover_img_url,
                description,
                author: {
                    name: author,
                    id: author_id,
                },
                genres,
                cre,
                status,
                chapters,
            };
        }
        catch (error) {
            console.log(error);
            return {
                error: error.message,
            };
        }
    });
}


/***/ }),

/***/ "./src/crawler/novel/new.ts":
/*!**********************************!*\
  !*** ./src/crawler/novel/new.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = NovelNew;
const instance_1 = __importDefault(__webpack_require__(/*! @/lib/instance */ "./src/lib/instance.ts"));
const string2html_1 = __importDefault(__webpack_require__(/*! @/lib/string2html */ "./src/lib/string2html.ts"));
const pages_json_1 = __importDefault(__webpack_require__(/*! @/crawler/json/pages.json */ "./src/crawler/json/pages.json"));
const dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ "dotenv"));
const global_1 = __webpack_require__(/*! ./global */ "./src/crawler/novel/global.ts");
dotenv_1.default.config();
function NovelNew() {
    return __awaiter(this, arguments, void 0, function* (page = 1) {
        const { data: pageString } = yield instance_1.default.get(`${pages_json_1.default.new}/trang-${page}`);
        const pageHTML = yield (0, string2html_1.default)(pageString);
        const novels = pageHTML.querySelectorAll('div.col-sm-12:nth-child(1) > div:nth-child(2) > div.row');
        return Array.from(novels).reduce((promise, novel) => __awaiter(this, void 0, void 0, function* () {
            yield promise;
            return [...(yield promise), yield (0, global_1.getInfo)(novel)];
        }), Promise.resolve([]));
    });
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));
const dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ "dotenv"));
const cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));
const router_1 = __importDefault(__webpack_require__(/*! @/routes/router */ "./src/routes/router.ts"));
__webpack_require__(/*! @/routes */ "./src/routes/index.ts");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)({ origin: '*' }));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('public'));
app.use(process.env.PREFIX_API || '/api/v1', router_1.default);
const server = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;


/***/ }),

/***/ "./src/lib/instance.ts":
/*!*****************************!*\
  !*** ./src/lib/instance.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const axios_1 = __importDefault(__webpack_require__(/*! axios */ "axios"));
const dotenv_1 = __importDefault(__webpack_require__(/*! dotenv */ "dotenv"));
dotenv_1.default.config();
const instance = axios_1.default.create({
    baseURL: process.env.WEB_CRAWLER_URL,
    headers: {
        'User-Agent': process.env.USER_AGENT,
        'Content-Type': 'application/json',
    },
    timeout: 10000,
});
exports["default"] = instance;


/***/ }),

/***/ "./src/lib/string2html.ts":
/*!********************************!*\
  !*** ./src/lib/string2html.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports["default"] = string2html;
const jsdom_1 = __webpack_require__(/*! jsdom */ "jsdom");
function string2html(html) {
    return __awaiter(this, void 0, void 0, function* () {
        const parser = new jsdom_1.JSDOM(html);
        return parser.window.document;
    });
}


/***/ }),

/***/ "./src/routes/genres.ts":
/*!******************************!*\
  !*** ./src/routes/genres.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const genres_1 = __importDefault(__webpack_require__(/*! @/controllers/genres */ "./src/controllers/genres.ts"));
const router_1 = __importDefault(__webpack_require__(/*! ./router */ "./src/routes/router.ts"));
const genres = new genres_1.default();
router_1.default.get('/genre', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield genres.getAll();
    res.json(response);
}));


/***/ }),

/***/ "./src/routes/index.ts":
/*!*****************************!*\
  !*** ./src/routes/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const swagger_ui_express_1 = __importDefault(__webpack_require__(/*! swagger-ui-express */ "swagger-ui-express"));
const swagger_json_1 = __importDefault(__webpack_require__(/*! ../../build/swagger.json */ "./build/swagger.json"));
__webpack_require__(/*! ./genres */ "./src/routes/genres.ts");
__webpack_require__(/*! ./novel */ "./src/routes/novel.ts");
const router_1 = __importDefault(__webpack_require__(/*! ./router */ "./src/routes/router.ts"));
router_1.default.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_json_1.default));
router_1.default.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dir = process.cwd();
    res.sendFile(`${dir}/index.html`);
}));


/***/ }),

/***/ "./src/routes/novel.ts":
/*!*****************************!*\
  !*** ./src/routes/novel.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const novel_1 = __importDefault(__webpack_require__(/*! @/controllers/novel */ "./src/controllers/novel.ts"));
const router_1 = __importDefault(__webpack_require__(/*! @/routes/router */ "./src/routes/router.ts"));
const { getFirstPage, getPage, getNewFirstPage, getNewPage, getNovel, getHotFirstPage, getHotPage, getGenreFirstPage, getGenrePage, getChapter, readChapter, } = new novel_1.default();
router_1.default.get('/novel', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const novelFull = yield getFirstPage();
    res.json(novelFull);
}));
router_1.default.get('/novel/trang-:page', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = parseInt(req.params.page);
    const novelFull = yield getPage(page);
    res.json(novelFull);
}));
router_1.default.get('/novel/new', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newNovel = yield getNewFirstPage();
    res.json(newNovel);
}));
router_1.default.get('/novel/new/trang-:page', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = parseInt(req.params.page);
    const hot = yield getNewPage(page);
    res.json(hot);
}));
router_1.default.get('/novel/hot', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hot = yield getHotFirstPage();
    res.json(hot);
}));
router_1.default.get('/novel/hot/trang-:page', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = parseInt(req.params.page);
    const hot = yield getHotPage(page);
    res.json(hot);
}));
router_1.default.get('/novel/genre/:genre', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const genre = req.params.genre;
    const novelFull = yield getGenreFirstPage(genre);
    res.json(novelFull);
}));
router_1.default.get('/novel/genre/:genre/trang-:page', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const genre = req.params.genre;
    const page = parseInt(req.params.page);
    const novelFull = yield getGenrePage(genre, page);
    res.json(novelFull);
}));
router_1.default.get('/novel/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const novelInfo = yield getNovel(req.params.id);
    res.json(novelInfo);
}));
router_1.default.get('/novel/:id/chapter', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const chapter = yield getChapter(req.params.id);
    res.json(chapter);
}));
router_1.default.get('/novel/:id/chapter/:chapter', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const chapter = parseInt(req.params.chapter);
    const content = yield readChapter(id, chapter);
    res.json(content);
}));


/***/ }),

/***/ "./src/routes/router.ts":
/*!******************************!*\
  !*** ./src/routes/router.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const express_1 = __webpack_require__(/*! express */ "express");
const router = (0, express_1.Router)();
exports["default"] = router;


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "axios-retry":
/*!******************************!*\
  !*** external "axios-retry" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("axios-retry");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "jsdom":
/*!************************!*\
  !*** external "jsdom" ***!
  \************************/
/***/ ((module) => {

module.exports = require("jsdom");

/***/ }),

/***/ "swagger-ui-express":
/*!*************************************!*\
  !*** external "swagger-ui-express" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("swagger-ui-express");

/***/ }),

/***/ "tsoa":
/*!***********************!*\
  !*** external "tsoa" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("tsoa");

/***/ }),

/***/ "./build/swagger.json":
/*!****************************!*\
  !*** ./build/swagger.json ***!
  \****************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"openapi":"3.0.0","components":{"examples":{},"headers":{},"parameters":{},"requestBodies":{},"responses":{},"schemas":{"Genre":{"properties":{"id":{"type":"string","minLength":1},"name":{"type":"string","minLength":1}},"required":["id","name"],"type":"object","additionalProperties":false},"Novel":{"properties":{"novel_id":{"type":"string","minLength":1},"title":{"type":"string","minLength":1},"cover_img_url":{"type":"string","minLength":1},"newest_chapter":{"type":"number","format":"double","minLength":1}},"required":["novel_id","title","cover_img_url","newest_chapter"],"type":"object","additionalProperties":false},"Chapter":{"properties":{"id":{"type":"number","format":"double","minLength":1},"title":{"type":"string","minLength":1}},"required":["id","title"],"type":"object","additionalProperties":false},"Read":{"properties":{"title":{"type":"string"},"prev_chapter":{"type":"number","format":"double"},"next_chapter":{"type":"number","format":"double"},"content":{"type":"string"}},"required":["title","prev_chapter","next_chapter","content"],"type":"object","additionalProperties":false}},"securitySchemes":{"Bearer":{"type":"apiKey","name":"Authorization","in":"header"}}},"info":{"title":"truyencc","contact":{}},"paths":{"/genre":{"get":{"operationId":"GetAll","responses":{"200":{"description":"Ok","content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/Genre"},"type":"array"}}}}},"tags":["Genre"],"security":[],"parameters":[]}},"/novel":{"get":{"operationId":"GetFirstPage","responses":{"200":{"description":"Ok","content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/Novel"},"type":"array"}}}}},"tags":["Novel","All","Novel"],"security":[],"parameters":[]}},"/novel/trang-{page}":{"get":{"operationId":"GetPage","responses":{"200":{"description":"Ok","content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/Novel"},"type":"array"}}}}},"tags":["Novel","All","Novel"],"security":[],"parameters":[{"in":"path","name":"page","required":true,"schema":{"format":"double","type":"number"}}]}},"/novel/new":{"get":{"operationId":"GetNewFirstPage","responses":{"200":{"description":"Ok","content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/Novel"},"type":"array"}}}}},"tags":["Novel","New Novel","Novel"],"security":[],"parameters":[]}},"/novel/new/{page}":{"get":{"operationId":"GetNewPage","responses":{"200":{"description":"Ok","content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/Novel"},"type":"array"}}}}},"tags":["Novel","New Novel","Novel"],"security":[],"parameters":[{"in":"path","name":"page","required":true,"schema":{"format":"double","type":"number"}}]}},"/novel/hot":{"get":{"operationId":"GetHotFirstPage","responses":{"200":{"description":"Ok","content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/Novel"},"type":"array"}}}}},"tags":["Novel","Hot Novel","Novel"],"security":[],"parameters":[]}},"/novel/hot/trang-{page}":{"get":{"operationId":"GetHotPage","responses":{"200":{"description":"Ok","content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/Novel"},"type":"array"}}}}},"tags":["Novel","Hot Novel","Novel"],"security":[],"parameters":[{"in":"path","name":"page","required":true,"schema":{"format":"double","type":"number"}}]}},"/novel/genre/{genre}":{"get":{"operationId":"GetGenreFirstPage","responses":{"200":{"description":"Ok","content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/Novel"},"type":"array"}}}}},"tags":["Novel","Filter Novel by Genre","Novel"],"security":[],"parameters":[{"in":"path","name":"genre","required":true,"schema":{"type":"string"}}]}},"/novel/genre/{genre}/trang-{page}":{"get":{"operationId":"GetGenrePage","responses":{"200":{"description":"Ok","content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/Novel"},"type":"array"}}}}},"tags":["Novel","Filter Novel by Genre","Novel"],"security":[],"parameters":[{"in":"path","name":"genre","required":true,"schema":{"type":"string"}},{"in":"path","name":"page","required":true,"schema":{"format":"double","type":"number"}}]}},"/novel/{id}":{"get":{"operationId":"GetNovel","responses":{"200":{"description":"Ok","content":{"application/json":{"schema":{"anyOf":[{"$ref":"#/components/schemas/Novel"},{"properties":{},"type":"object"}]}}}}},"tags":["Novel","Detail Novel","Novel"],"security":[],"parameters":[{"in":"path","name":"id","required":true,"schema":{"type":"string"}}]}},"/novel/{id}/chapter":{"get":{"operationId":"GetChapter","responses":{"200":{"description":"Ok","content":{"application/json":{"schema":{"items":{"$ref":"#/components/schemas/Chapter"},"type":"array"}}}}},"tags":["Novel","Novel Chapter","Novel"],"security":[],"parameters":[{"in":"path","name":"id","required":true,"schema":{"type":"string"}}]}},"/novel/{id}/chapter/{chapter}":{"get":{"operationId":"ReadChapter","responses":{"200":{"description":"Ok","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Read"}}}}},"tags":["Novel","Read Novel","Novel"],"security":[],"parameters":[{"in":"path","name":"id","required":true,"schema":{"type":"string"}},{"in":"path","name":"chapter","required":true,"schema":{"format":"double","type":"number"}}]}}},"servers":[{"url":"http://localhost:3000/api/v1"}]}');

/***/ }),

/***/ "./src/crawler/json/api.json":
/*!***********************************!*\
  !*** ./src/crawler/json/api.json ***!
  \***********************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"hot":"/ajax.php?type=hot_select","new":"/ajax.php?type=new_select","list_chapter":"/ajax.php?type=list_chapter"}');

/***/ }),

/***/ "./src/crawler/json/pages.json":
/*!*************************************!*\
  !*** ./src/crawler/json/pages.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"full":"/danh-sach/truyen-full","new":"/danh-sach/truyen-moi","hot":"/danh-sach/truyen-hot","genre":"/the-loai"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN2QixDQUFDLEVBQUM7QUFFRixnQkFBTSxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUNoRCxNQUFNLE9BQU8sR0FBRyxNQUFNLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUMvQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUNyQixDQUFDLEVBQUM7QUFFRixnQkFBTSxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsRUFBRTtJQUN6RCxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7SUFDeEIsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO0lBQzVDLE1BQU0sT0FBTyxHQUFHLE1BQU0sV0FBVyxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUM7SUFDOUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDckIsQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDaEZGLGdFQUFnQztBQUVoQyxNQUFNLE1BQU0sR0FBRyxvQkFBTSxHQUFFO0FBQ3ZCLHFCQUFlLE1BQU07Ozs7Ozs7Ozs7O0FDSHJCOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cnV5ZW5jYy8uL3NyYy9jb250cm9sbGVycy9nZW5yZXMudHMiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2MvLi9zcmMvY29udHJvbGxlcnMvbm92ZWwudHMiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2MvLi9zcmMvY3Jhd2xlci9nZW5yZXMudHMiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2MvLi9zcmMvY3Jhd2xlci9ub3ZlbC9jaGFwdGVyL2xpc3QudHMiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2MvLi9zcmMvY3Jhd2xlci9ub3ZlbC9jaGFwdGVyL3JlYWQudHMiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2MvLi9zcmMvY3Jhd2xlci9ub3ZlbC9mdWxsLnRzIiwid2VicGFjazovL3RydXllbmNjLy4vc3JjL2NyYXdsZXIvbm92ZWwvZ2VucmUudHMiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2MvLi9zcmMvY3Jhd2xlci9ub3ZlbC9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2MvLi9zcmMvY3Jhd2xlci9ub3ZlbC9ob3QudHMiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2MvLi9zcmMvY3Jhd2xlci9ub3ZlbC9pbmRleC50cyIsIndlYnBhY2s6Ly90cnV5ZW5jYy8uL3NyYy9jcmF3bGVyL25vdmVsL2luZm8udHMiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2MvLi9zcmMvY3Jhd2xlci9ub3ZlbC9uZXcudHMiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2MvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2MvLi9zcmMvbGliL2luc3RhbmNlLnRzIiwid2VicGFjazovL3RydXllbmNjLy4vc3JjL2xpYi9zdHJpbmcyaHRtbC50cyIsIndlYnBhY2s6Ly90cnV5ZW5jYy8uL3NyYy9yb3V0ZXMvZ2VucmVzLnRzIiwid2VicGFjazovL3RydXllbmNjLy4vc3JjL3JvdXRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly90cnV5ZW5jYy8uL3NyYy9yb3V0ZXMvbm92ZWwudHMiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2MvLi9zcmMvcm91dGVzL3JvdXRlci50cyIsIndlYnBhY2s6Ly90cnV5ZW5jYy9leHRlcm5hbCBjb21tb25qcyBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2MvZXh0ZXJuYWwgY29tbW9uanMgXCJheGlvcy1yZXRyeVwiIiwid2VicGFjazovL3RydXllbmNjL2V4dGVybmFsIGNvbW1vbmpzIFwiY29yc1wiIiwid2VicGFjazovL3RydXllbmNjL2V4dGVybmFsIGNvbW1vbmpzIFwiZG90ZW52XCIiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2MvZXh0ZXJuYWwgY29tbW9uanMgXCJleHByZXNzXCIiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2MvZXh0ZXJuYWwgY29tbW9uanMgXCJqc2RvbVwiIiwid2VicGFjazovL3RydXllbmNjL2V4dGVybmFsIGNvbW1vbmpzIFwic3dhZ2dlci11aS1leHByZXNzXCIiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2MvZXh0ZXJuYWwgY29tbW9uanMgXCJ0c29hXCIiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2Mvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90cnV5ZW5jYy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdHJ1eWVuY2Mvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHZW5yZXMgZnJvbSAnQC9jcmF3bGVyL2dlbnJlcydcbmltcG9ydCB0eXBlIHsgR2VucmUgfSBmcm9tICdAL3R5cGVzL2dlbnJlJ1xuaW1wb3J0IHsgQ29udHJvbGxlciwgR2V0LCBSb3V0ZSwgVGFncyB9IGZyb20gJ3Rzb2EnXG5cbkBSb3V0ZSgnZ2VucmUnKVxuQFRhZ3MoJ0dlbnJlJylcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdlbnJlc0NvbnRyb2xsZXIgZXh0ZW5kcyBDb250cm9sbGVyIHtcbiAgICBAR2V0KCcvJylcbiAgICBwdWJsaWMgYXN5bmMgZ2V0QWxsKCk6IFByb21pc2U8R2VucmVbXT4ge1xuICAgICAgICBjb25zdCBnZW5yZXMgPSBhd2FpdCBHZW5yZXMoKVxuICAgICAgICBpZiAoZ2VucmVzLmxlbmd0aCA+IDApIHJldHVybiBnZW5yZXNcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgcHVibGljIGFzeW5jIHZhbGlkKGdlbnJlSWQ6IHN0cmluZyk6IFByb21pc2U8R2VucmUgfCB7fT4ge1xuICAgICAgICBjb25zdCBnZW5yZXMgPSBhd2FpdCB0aGlzLmdldEFsbCgpXG4gICAgICAgIGNvbnN0IGdlbnJlID0gZ2VucmVzLmZpbmQoZ2VucmUgPT4gZ2VucmUuaWQgPT09IGdlbnJlSWQpXG4gICAgICAgIGlmIChnZW5yZSkgcmV0dXJuIGdlbnJlXG4gICAgICAgIHJldHVybiB7fVxuICAgIH1cbn1cbiIsImltcG9ydCBOb3ZlbENyYXdsZXIgZnJvbSAnQC9jcmF3bGVyL25vdmVsJ1xuaW1wb3J0IE5vdmVsQ2hhcHRlciBmcm9tICdAL2NyYXdsZXIvbm92ZWwvY2hhcHRlci9saXN0J1xuaW1wb3J0IE5vdmVsQ29udGVudCBmcm9tICdAL2NyYXdsZXIvbm92ZWwvY2hhcHRlci9yZWFkJ1xuaW1wb3J0IE5vdmVsSW5mbyBmcm9tICdAL2NyYXdsZXIvbm92ZWwvaW5mbydcbmltcG9ydCB0eXBlIHsgQ2hhcHRlciB9IGZyb20gJ0AvdHlwZXMvY2hhcHRlcidcbmltcG9ydCB0eXBlIE5vdmVsIGZyb20gJ0AvdHlwZXMvbm92ZWwnXG5pbXBvcnQgdHlwZSB7IFJlYWQgfSBmcm9tICdAL3R5cGVzL3JlYWQnXG5pbXBvcnQgeyBDb250cm9sbGVyLCBHZXQsIFJvdXRlLCBUYWdzIH0gZnJvbSAndHNvYSdcblxuQFJvdXRlKCdub3ZlbCcpXG5AVGFncygnTm92ZWwnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm92ZWxDb250cm9sbGVyIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgQEdldCgnLycpXG4gICAgQFRhZ3MoJ05vdmVsJywgJ0FsbCcpXG4gICAgcHVibGljIGFzeW5jIGdldEZpcnN0UGFnZSgpOiBQcm9taXNlPE5vdmVsW10+IHtcbiAgICAgICAgY29uc3Qgbm92ZWxzID0gYXdhaXQgTm92ZWxDcmF3bGVyKCdmdWxsJylcblxuICAgICAgICBpZiAobm92ZWxzLmxlbmd0aCA+IDApIHJldHVybiBub3ZlbHNcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgQEdldCgnL3RyYW5nLXtwYWdlfScpXG4gICAgQFRhZ3MoJ05vdmVsJywgJ0FsbCcpXG4gICAgcHVibGljIGFzeW5jIGdldFBhZ2UocGFnZTogbnVtYmVyKTogUHJvbWlzZTxOb3ZlbFtdPiB7XG4gICAgICAgIGNvbnN0IG5vdmVscyA9IGF3YWl0IE5vdmVsQ3Jhd2xlcignZnVsbCcsIHBhZ2UpXG5cbiAgICAgICAgaWYgKG5vdmVscy5sZW5ndGggPiAwKSByZXR1cm4gbm92ZWxzXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIEBHZXQoJy9uZXcnKVxuICAgIEBUYWdzKCdOb3ZlbCcsICdOZXcgTm92ZWwnKVxuICAgIHB1YmxpYyBhc3luYyBnZXROZXdGaXJzdFBhZ2UoKTogUHJvbWlzZTxOb3ZlbFtdPiB7XG4gICAgICAgIGNvbnN0IG5vdmVscyA9IGF3YWl0IE5vdmVsQ3Jhd2xlcignbmV3JylcblxuICAgICAgICBpZiAobm92ZWxzLmxlbmd0aCA+IDApIHJldHVybiBub3ZlbHNcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgQEdldCgnL25ldy97cGFnZX0nKVxuICAgIEBUYWdzKCdOb3ZlbCcsICdOZXcgTm92ZWwnKVxuICAgIHB1YmxpYyBhc3luYyBnZXROZXdQYWdlKHBhZ2U6IG51bWJlcik6IFByb21pc2U8Tm92ZWxbXT4ge1xuICAgICAgICBjb25zdCBub3ZlbHMgPSBhd2FpdCBOb3ZlbENyYXdsZXIoJ25ldycsIHBhZ2UpXG5cbiAgICAgICAgaWYgKG5vdmVscy5sZW5ndGggPiAwKSByZXR1cm4gbm92ZWxzXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIEBHZXQoJy9ob3QnKVxuICAgIEBUYWdzKCdOb3ZlbCcsICdIb3QgTm92ZWwnKVxuICAgIHB1YmxpYyBhc3luYyBnZXRIb3RGaXJzdFBhZ2UoKTogUHJvbWlzZTxOb3ZlbFtdPiB7XG4gICAgICAgIGNvbnN0IG5vdmVscyA9IGF3YWl0IE5vdmVsQ3Jhd2xlcignaG90JylcblxuICAgICAgICBpZiAobm92ZWxzLmxlbmd0aCA+IDApIHJldHVybiBub3ZlbHNcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxuXG4gICAgQEdldCgnL2hvdC90cmFuZy17cGFnZX0nKVxuICAgIEBUYWdzKCdOb3ZlbCcsICdIb3QgTm92ZWwnKVxuICAgIHB1YmxpYyBhc3luYyBnZXRIb3RQYWdlKHBhZ2U6IG51bWJlcik6IFByb21pc2U8Tm92ZWxbXT4ge1xuICAgICAgICBjb25zdCBub3ZlbHMgPSBhd2FpdCBOb3ZlbENyYXdsZXIoJ2hvdCcsIHBhZ2UpXG5cbiAgICAgICAgaWYgKG5vdmVscy5sZW5ndGggPiAwKSByZXR1cm4gbm92ZWxzXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIEBHZXQoJy9nZW5yZS97Z2VucmV9JylcbiAgICBAVGFncygnTm92ZWwnLCAnRmlsdGVyIE5vdmVsIGJ5IEdlbnJlJylcbiAgICBwdWJsaWMgYXN5bmMgZ2V0R2VucmVGaXJzdFBhZ2UoZ2VucmU6IHN0cmluZyk6IFByb21pc2U8Tm92ZWxbXT4ge1xuICAgICAgICBjb25zdCBub3ZlbHMgPSBhd2FpdCBOb3ZlbENyYXdsZXIoJ2dlbnJlJywgMSwgZ2VucmUpXG5cbiAgICAgICAgaWYgKG5vdmVscy5sZW5ndGggPiAwKSByZXR1cm4gbm92ZWxzXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cblxuICAgIEBHZXQoJy9nZW5yZS97Z2VucmV9L3RyYW5nLXtwYWdlfScpXG4gICAgQFRhZ3MoJ05vdmVsJywgJ0ZpbHRlciBOb3ZlbCBieSBHZW5yZScpXG4gICAgcHVibGljIGFzeW5jIGdldEdlbnJlUGFnZShnZW5yZTogc3RyaW5nLCBwYWdlOiBudW1iZXIpOiBQcm9taXNlPE5vdmVsW10+IHtcbiAgICAgICAgY29uc3Qgbm92ZWxzID0gYXdhaXQgTm92ZWxDcmF3bGVyKCdnZW5yZScsIHBhZ2UsIGdlbnJlKVxuXG4gICAgICAgIGlmIChub3ZlbHMubGVuZ3RoID4gMCkgcmV0dXJuIG5vdmVsc1xuICAgICAgICByZXR1cm4gW11cbiAgICB9XG5cbiAgICBAR2V0KCcve2lkfScpXG4gICAgQFRhZ3MoJ05vdmVsJywgJ0RldGFpbCBOb3ZlbCcpXG4gICAgcHVibGljIGFzeW5jIGdldE5vdmVsKGlkOiBzdHJpbmcpOiBQcm9taXNlPE5vdmVsIHwge30+IHtcbiAgICAgICAgY29uc3Qgbm92ZWwgPSBhd2FpdCBOb3ZlbEluZm8oaWQpXG5cbiAgICAgICAgaWYgKG5vdmVsKSByZXR1cm4gbm92ZWxcbiAgICAgICAgcmV0dXJuIHt9XG4gICAgfVxuXG4gICAgQEdldCgnL3tpZH0vY2hhcHRlcicpXG4gICAgQFRhZ3MoJ05vdmVsJywgJ05vdmVsIENoYXB0ZXInKVxuICAgIHB1YmxpYyBhc3luYyBnZXRDaGFwdGVyKGlkOiBzdHJpbmcpOiBQcm9taXNlPENoYXB0ZXJbXT4ge1xuICAgICAgICBjb25zdCBjaGFwdGVyID0gYXdhaXQgTm92ZWxDaGFwdGVyKGlkKVxuICAgICAgICByZXR1cm4gY2hhcHRlclxuICAgIH1cblxuICAgIEBHZXQoJy97aWR9L2NoYXB0ZXIve2NoYXB0ZXJ9JylcbiAgICBAVGFncygnTm92ZWwnLCAnUmVhZCBOb3ZlbCcpXG4gICAgcHVibGljIGFzeW5jIHJlYWRDaGFwdGVyKGlkOiBzdHJpbmcsIGNoYXB0ZXI6IG51bWJlcik6IFByb21pc2U8UmVhZD4ge1xuICAgICAgICBjb25zdCByZWFkID0gYXdhaXQgTm92ZWxDb250ZW50KGlkLCBjaGFwdGVyKVxuICAgICAgICByZXR1cm4gcmVhZFxuICAgIH1cbn1cbiIsImltcG9ydCBpbnN0YW5jZSBmcm9tICdAL2xpYi9pbnN0YW5jZSdcbmltcG9ydCBzdHJpbmcyaHRtbCBmcm9tICdAL2xpYi9zdHJpbmcyaHRtbCdcbmltcG9ydCB0eXBlIHsgR2VucmUgfSBmcm9tICdAL3R5cGVzL2dlbnJlJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBHZW5yZXMoKTogUHJvbWlzZTxHZW5yZVtdPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBkYXRhOiBob21lU3RyaW5nIH0gPSBhd2FpdCBpbnN0YW5jZS5nZXQoJy8nKVxuICAgICAgICBjb25zdCBob21lSFRNTCA9IGF3YWl0IHN0cmluZzJodG1sKGhvbWVTdHJpbmcpXG5cbiAgICAgICAgY29uc3QgZ2VucmVzOiBOb2RlTGlzdE9mPEhUTUxBbmNob3JFbGVtZW50PiA9IGhvbWVIVE1MLnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnLm11bHRpLWNvbHVtbiA+IGRpdjpudGgtY2hpbGQoMSkgYScsXG4gICAgICAgICkgYXMgTm9kZUxpc3RPZjxIVE1MQW5jaG9yRWxlbWVudD5cblxuICAgICAgICBjb25zdCBnZW5yZXNBcnJheSA9IEFycmF5LmZyb20oZ2VucmVzKS5tYXAob3B0aW9uID0+ICh7XG4gICAgICAgICAgICBuYW1lOiBvcHRpb24udGV4dCxcbiAgICAgICAgICAgIGlkOiBvcHRpb24uaHJlZi5zcGxpdCgnLycpW29wdGlvbi5ocmVmLnNwbGl0KCcvJykubGVuZ3RoIC0gMl0gPz8gJycsXG4gICAgICAgIH0pKVxuXG4gICAgICAgIHJldHVybiBnZW5yZXNBcnJheVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgIHJldHVybiBbXVxuICAgIH1cbn1cbiIsImltcG9ydCBpbnN0YW5jZSBmcm9tICdAL2xpYi9pbnN0YW5jZSdcbmltcG9ydCBzdHJpbmcyaHRtbCBmcm9tICdAL2xpYi9zdHJpbmcyaHRtbCdcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52J1xuaW1wb3J0IGFwaUpzb24gZnJvbSAnQC9jcmF3bGVyL2pzb24vYXBpLmpzb24nXG5pbXBvcnQgYXhpb3NSZXRyeSBmcm9tICdheGlvcy1yZXRyeSdcblxuZG90ZW52LmNvbmZpZygpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIE5vdmVsQ2hhcHRlcihub3ZlbF9pZDogc3RyaW5nKSB7XG4gICAgY29uc3QgeyBkYXRhOiBwYWdlSFRNTCB9ID0gYXdhaXQgaW5zdGFuY2UuZ2V0KG5vdmVsX2lkKVxuXG4gICAgY29uc3QgSFRNTCA9IGF3YWl0IHN0cmluZzJodG1sKHBhZ2VIVE1MKVxuXG4gICAgY29uc3QgdGl0bGUgPSBIVE1MLnRpdGxlXG5cbiAgICBjb25zdCBtYXhQYWdlID0gcGFyc2VJbnQoXG4gICAgICAgIEhUTUwucXVlcnlTZWxlY3RvcignLnBhZ2luYXRpb24gPiBsaTpudGgtY2hpbGQoOCkgPiBhOm50aC1jaGlsZCgxKScpXG4gICAgICAgICAgICA/LmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICA/LnJlcGxhY2UoKHByb2Nlc3MuZW52LldFQl9DUkFXTEVSX1VSTCA/PyAnJykgKyAnLycsICcnKVxuICAgICAgICAgICAgLnNwbGl0KCcvJylbMV1cbiAgICAgICAgICAgIC5zcGxpdCgnLScpWzFdID8/ICcxJyxcbiAgICApXG5cbiAgICBheGlvc1JldHJ5KGluc3RhbmNlIGFzIGFueSwgeyByZXRyaWVzOiAzIH0pXG5cbiAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxzdHJpbmc+W10gPSBBcnJheS5mcm9tKFxuICAgICAgICB7IGxlbmd0aDogbWF4UGFnZSB9LFxuICAgICAgICAoXywgaSkgPT5cbiAgICAgICAgICAgIGluc3RhbmNlXG4gICAgICAgICAgICAgICAgLmdldChcbiAgICAgICAgICAgICAgICAgICAgYCR7YXBpSnNvbi5saXN0X2NoYXB0ZXJ9JnRpZD0xJnRhc2NpaT0ke25vdmVsX2lkfSZ0bmFtZT0ke3RpdGxlfSZwYWdlPSR7aSArIDF9JnRvdGFscD0ke21heFBhZ2V9YCxcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHsgZGF0YTogeyBjaGFwX2xpc3QgfSB9KSA9PiBjaGFwX2xpc3QpLFxuICAgIClcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlcyA9IGF3YWl0IFByb21pc2UuYWxsKHByb21pc2VzKVxuXG4gICAgICAgIGNvbnN0IGNoYXB0ZXJzUHJvbWlzZXMgPSByZXNwb25zZXMubWFwKGFzeW5jIChzdHJpbmdIVE1MOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IEhUTUwgPSBhd2FpdCBzdHJpbmcyaHRtbChzdHJpbmdIVE1MKVxuXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShIVE1MLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKSlcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBjaGFwdGVyc0hUTUwgPSBhd2FpdCBQcm9taXNlLmFsbChjaGFwdGVyc1Byb21pc2VzKVxuXG4gICAgICAgIGNvbnN0IGNoYXB0ZXJzID0gY2hhcHRlcnNIVE1MXG4gICAgICAgICAgICAuZmxhdCgpXG4gICAgICAgICAgICAubWFwKChjaGFwdGVyOiBIVE1MQW5jaG9yRWxlbWVudCwgaWQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9IGNoYXB0ZXIudGV4dENvbnRlbnQ/LnRyaW0oKSA/PyAnJ1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkICsgMSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgdGl0bGUgfSkgPT4gdGl0bGUgIT09ICcnKVxuXG4gICAgICAgIHJldHVybiBjaGFwdGVyc1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkOicsIGVycm9yKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG4iLCJpbXBvcnQgaW5zdGFuY2UgZnJvbSAnQC9saWIvaW5zdGFuY2UnXG5pbXBvcnQgc3RyaW5nMmh0bWwgZnJvbSAnQC9saWIvc3RyaW5nMmh0bWwnXG5pbXBvcnQgdHlwZSB7IFJlYWQgfSBmcm9tICdAL3R5cGVzL3JlYWQnXG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcblxuZG90ZW52LmNvbmZpZygpXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIE5vdmVsQ29udGVudChcbiAgICBub3ZlbF9pZDogc3RyaW5nLFxuICAgIGNoYXB0ZXI6IG51bWJlcixcbik6IFByb21pc2U8UmVhZD4ge1xuICAgIGNvbnN0IHsgZGF0YTogcGFnZUhUTUwgfSA9IGF3YWl0IGluc3RhbmNlLmdldChcbiAgICAgICAgYCR7bm92ZWxfaWR9L2NodW9uZy0ke2NoYXB0ZXJ9YCxcbiAgICApXG5cbiAgICBjb25zdCBIVE1MID0gYXdhaXQgc3RyaW5nMmh0bWwocGFnZUhUTUwpXG5cbiAgICBjb25zdCBib2R5SFRNTCA9IEhUTUwucXVlcnlTZWxlY3RvcignLmNoYXB0ZXItYycpIGFzIEhUTUxEaXZFbGVtZW50XG5cbiAgICBib2R5SFRNTC5yZW1vdmVDaGlsZChcbiAgICAgICAgYm9keUhUTUwucXVlcnlTZWxlY3RvcignI2Fkcy1jaGFwdGVyLXBjLXRvcCcpIGFzIEhUTUxEaXZFbGVtZW50LFxuICAgIClcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBib2R5SFRNTC5pbm5lckhUTUxcblxuICAgIGNvbnN0IHRpdGxlID0gKEhUTUwucXVlcnlTZWxlY3RvcignLmNoYXB0ZXItdGl0bGUnKSBhcyBIVE1MQW5jaG9yRWxlbWVudClcbiAgICAgICAgLnRpdGxlXG5cbiAgICBjb25zdCBwcmV2X2NoYXB0ZXIgPSBwYXJzZUludChcbiAgICAgICAgKEhUTUwucXVlcnlTZWxlY3RvcignI3ByZXZfY2hhcCcpIGFzIEhUTUxBbmNob3JFbGVtZW50KS50aXRsZS5yZXBsYWNlKFxuICAgICAgICAgICAgJ0NoxrDGoW5nICcsXG4gICAgICAgICAgICAnJyxcbiAgICAgICAgKSxcbiAgICApXG5cbiAgICBjb25zdCBuZXh0X2NoYXB0ZXIgPSBwYXJzZUludChcbiAgICAgICAgKEhUTUwucXVlcnlTZWxlY3RvcignI25leHRfY2hhcCcpIGFzIEhUTUxBbmNob3JFbGVtZW50KS50aXRsZS5yZXBsYWNlKFxuICAgICAgICAgICAgJ0NoxrDGoW5nICcsXG4gICAgICAgICAgICAnJyxcbiAgICAgICAgKSxcbiAgICApXG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aXRsZSxcbiAgICAgICAgcHJldl9jaGFwdGVyLFxuICAgICAgICBuZXh0X2NoYXB0ZXIsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgfVxufVxuIiwiaW1wb3J0IGluc3RhbmNlIGZyb20gJ0AvbGliL2luc3RhbmNlJ1xuaW1wb3J0IHN0cmluZzJodG1sIGZyb20gJ0AvbGliL3N0cmluZzJodG1sJ1xuaW1wb3J0IHBhZ2VzSnNvbiBmcm9tICdAL2NyYXdsZXIvanNvbi9wYWdlcy5qc29uJ1xuXG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcbmltcG9ydCB0eXBlIE5vdmVsIGZyb20gJ0AvdHlwZXMvbm92ZWwnXG5pbXBvcnQgeyBnZXRJbmZvIH0gZnJvbSAnLi9nbG9iYWwnXG5kb3RlbnYuY29uZmlnKClcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gTm92ZWxGdWxsKHBhZ2U6IG51bWJlciA9IDEpOiBQcm9taXNlPE5vdmVsW10+IHtcbiAgICBjb25zdCB7IGRhdGE6IHBhZ2VTdHJpbmcgfSA9IGF3YWl0IGluc3RhbmNlLmdldChcbiAgICAgICAgYCR7cGFnZXNKc29uLmZ1bGx9L3RyYW5nLSR7cGFnZX1gLFxuICAgIClcblxuICAgIGNvbnN0IHBhZ2VIVE1MID0gYXdhaXQgc3RyaW5nMmh0bWwocGFnZVN0cmluZylcblxuICAgIGNvbnN0IG5vdmVsczogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD4gPSBwYWdlSFRNTC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAnZGl2LmNvbC1zbS0xMjpudGgtY2hpbGQoMSkgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2LnJvdycsXG4gICAgKSBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PlxuXG4gICAgcmV0dXJuIEFycmF5LmZyb20obm92ZWxzKVxuICAgICAgICAuZmlsdGVyKG5vdmVsID0+XG4gICAgICAgICAgICBub3ZlbC5xdWVyeVNlbGVjdG9yKCdkaXYuY29sLXhzLTMgPiBkaXYgPiBkaXYubGF6eWltZycpLFxuICAgICAgICApXG4gICAgICAgIC5yZWR1Y2UoXG4gICAgICAgICAgICBhc3luYyAocHJvbWlzZSwgbm92ZWwpID0+IHtcbiAgICAgICAgICAgICAgICBhd2FpdCBwcm9taXNlXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAuLi4oYXdhaXQgcHJvbWlzZSksXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGdldEluZm8obm92ZWwgYXMgSFRNTERpdkVsZW1lbnQpLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoW10gYXMgTm92ZWxbXSksXG4gICAgICAgIClcbn1cbiIsImltcG9ydCBpbnN0YW5jZSBmcm9tICdAL2xpYi9pbnN0YW5jZSdcbmltcG9ydCBzdHJpbmcyaHRtbCBmcm9tICdAL2xpYi9zdHJpbmcyaHRtbCdcbmltcG9ydCBwYWdlc0pzb24gZnJvbSAnQC9jcmF3bGVyL2pzb24vcGFnZXMuanNvbidcblxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnXG5pbXBvcnQgR2VucmVzQ29udHJvbGxlciBmcm9tICdAL2NvbnRyb2xsZXJzL2dlbnJlcydcbmltcG9ydCB0eXBlIE5vdmVsIGZyb20gJ0AvdHlwZXMvbm92ZWwnXG5pbXBvcnQgeyBnZXRJbmZvIH0gZnJvbSAnLi9nbG9iYWwnXG5pbXBvcnQgdHlwZSB7IEdlbnJlIH0gZnJvbSAnQC90eXBlcy9nZW5yZSdcbmRvdGVudi5jb25maWcoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBOb3ZlbEdlbnJlKFxuICAgIGdlbnJlSWQ6IHN0cmluZyxcbiAgICBwYWdlOiBudW1iZXIgPSAxLFxuKTogUHJvbWlzZTxOb3ZlbFtdPiB7XG4gICAgY29uc3QgZ2VucmVzID0gbmV3IEdlbnJlc0NvbnRyb2xsZXIoKVxuICAgIGNvbnN0IGdlbnJlVmFsaWQgPSBhd2FpdCBnZW5yZXMudmFsaWQoZ2VucmVJZClcblxuICAgIGlmICghKE9iamVjdC5rZXlzKGdlbnJlVmFsaWQpLmxlbmd0aCA+IDApKSByZXR1cm4gW11cblxuICAgIGNvbnN0IGdlbnJlID0gKGdlbnJlVmFsaWQgYXMgR2VucmUpLmlkXG5cbiAgICBjb25zdCB7IGRhdGE6IHBhZ2VTdHJpbmcgfSA9IGF3YWl0IGluc3RhbmNlLmdldChcbiAgICAgICAgYCR7cGFnZXNKc29uLmdlbnJlfS8ke2dlbnJlfS90cmFuZy0ke3BhZ2V9YCxcbiAgICApXG5cbiAgICBjb25zdCBwYWdlSFRNTCA9IGF3YWl0IHN0cmluZzJodG1sKHBhZ2VTdHJpbmcpXG5cbiAgICBjb25zdCBub3ZlbHM6IE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+ID0gcGFnZUhUTUwucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgJ2Rpdi5jb2wtc20tMTI6bnRoLWNoaWxkKDEpID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdi5yb3cnLFxuICAgICkgYXMgTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD5cblxuICAgIHJldHVybiBBcnJheS5mcm9tKG5vdmVscylcbiAgICAgICAgLmZpbHRlcihub3ZlbCA9PlxuICAgICAgICAgICAgbm92ZWwucXVlcnlTZWxlY3RvcignZGl2LmNvbC14cy0zID4gZGl2ID4gZGl2LmxhenlpbWcnKSxcbiAgICAgICAgKVxuICAgICAgICAucmVkdWNlKFxuICAgICAgICAgICAgYXN5bmMgKHByb21pc2UsIG5vdmVsKSA9PiB7XG4gICAgICAgICAgICAgICAgYXdhaXQgcHJvbWlzZVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgLi4uKGF3YWl0IHByb21pc2UpLFxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBnZXRJbmZvKG5vdmVsIGFzIEhUTUxEaXZFbGVtZW50KSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKFtdIGFzIE5vdmVsW10pLFxuICAgICAgICApXG59XG4iLCJpbXBvcnQgdHlwZSBOb3ZlbCBmcm9tICdAL3R5cGVzL25vdmVsJ1xuXG5jb25zdCBJTUFHRV9XSURUSCA9IDQzMFxuY29uc3QgSU1BR0VfSEVJR0hUID0gNjI0XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJbmZvKG5vdmVsOiBIVE1MRGl2RWxlbWVudCk6IFByb21pc2U8Tm92ZWw+IHtcbiAgICBjb25zdCB0aXRsZSA9XG4gICAgICAgIChcbiAgICAgICAgICAgIG5vdmVsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJ2Rpdi5jb2wteHMtMyA+IGRpdiA+IGRpdi5sYXp5aW1nJyxcbiAgICAgICAgICAgICkgYXMgSFRNTERpdkVsZW1lbnRcbiAgICAgICAgKS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWx0JykgPz8gJydcblxuICAgIGNvbnN0IG5vdmVsX2lkID1cbiAgICAgICAgKFxuICAgICAgICAgICAgbm92ZWwucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAnZGl2LmNvbC14cy03ID4gZGl2ID4gaDMgPiBhJyxcbiAgICAgICAgICAgICkgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICAgICAgKVxuICAgICAgICAgICAgLmdldEF0dHJpYnV0ZSgnaHJlZicpXG4gICAgICAgICAgICA/LnJlcGxhY2UocHJvY2Vzcy5lbnYuV0VCX0NSQVdMRVJfVVJMID8/ICcnLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlQWxsKCcvJywgJycpID8/ICcnXG5cbiAgICBjb25zdCBjb3Zlcl9pbWdfdXJsID0gKFxuICAgICAgICAoXG4gICAgICAgICAgICBub3ZlbC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICdkaXYuY29sLXhzLTMgPiBkaXYgPiBkaXYubGF6eWltZycsXG4gICAgICAgICAgICApIGFzIEhUTUxEaXZFbGVtZW50XG4gICAgICAgICkuZ2V0QXR0cmlidXRlKCdkYXRhLWltYWdlJykgPz8gJydcbiAgICApLnJlcGxhY2UoLz13XFxkKy1oXFxkKy8sIGA9dyR7SU1BR0VfV0lEVEh9LWgke0lNQUdFX0hFSUdIVH1gKVxuXG4gICAgY29uc3QgbmV3ZXN0X2NoYXB0ZXIgPSBwYXJzZUludChcbiAgICAgICAgKFxuICAgICAgICAgICAgKG5vdmVsLnF1ZXJ5U2VsZWN0b3IoJ2Rpdi5jb2wteHMtMiA+IGRpdiA+IGEnKSBhcyBIVE1MQW5jaG9yRWxlbWVudClcbiAgICAgICAgICAgICAgICAudGV4dENvbnRlbnQgYXMgc3RyaW5nXG4gICAgICAgICkucmVwbGFjZSgnQ2jGsMahbmcgJywgJycpLFxuICAgIClcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvdmVyX2ltZ191cmw6IGNvdmVyX2ltZ191cmwgPz8gJycsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBub3ZlbF9pZCxcbiAgICAgICAgbmV3ZXN0X2NoYXB0ZXIsXG4gICAgfVxufVxuIiwiaW1wb3J0IGluc3RhbmNlIGZyb20gJ0AvbGliL2luc3RhbmNlJ1xuaW1wb3J0IHN0cmluZzJodG1sIGZyb20gJ0AvbGliL3N0cmluZzJodG1sJ1xuaW1wb3J0IHBhZ2VzSnNvbiBmcm9tICdAL2NyYXdsZXIvanNvbi9wYWdlcy5qc29uJ1xuaW1wb3J0IHR5cGUgTm92ZWwgZnJvbSAnQC90eXBlcy9ub3ZlbCdcbmltcG9ydCB7IGdldEluZm8gfSBmcm9tICcuL2dsb2JhbCdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gTm92ZWxIb3QocGFnZTogbnVtYmVyID0gMSk6IFByb21pc2U8Tm92ZWxbXT4ge1xuICAgIGNvbnN0IHsgZGF0YTogcGFnZVN0cmluZyB9ID0gYXdhaXQgaW5zdGFuY2UuZ2V0KFxuICAgICAgICBgJHtwYWdlc0pzb24uaG90fS90cmFuZy0ke3BhZ2V9YCxcbiAgICApXG5cbiAgICBjb25zdCBwYWdlSFRNTCA9IGF3YWl0IHN0cmluZzJodG1sKHBhZ2VTdHJpbmcpXG5cbiAgICBjb25zdCBub3ZlbHM6IE5vZGVMaXN0T2Y8SFRNTERpdkVsZW1lbnQ+ID0gcGFnZUhUTUwucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgJ2Rpdi5jb2wtc20tMTI6bnRoLWNoaWxkKDEpID4gZGl2Om50aC1jaGlsZCgyKSA+IGRpdi5yb3cnLFxuICAgICkgYXMgTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD5cblxuICAgIHJldHVybiBBcnJheS5mcm9tKG5vdmVscykucmVkdWNlKFxuICAgICAgICBhc3luYyAocHJvbWlzZSwgbm92ZWwpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IHByb21pc2VcblxuICAgICAgICAgICAgcmV0dXJuIFsuLi4oYXdhaXQgcHJvbWlzZSksIGF3YWl0IGdldEluZm8obm92ZWwgYXMgSFRNTERpdkVsZW1lbnQpXVxuICAgICAgICB9LFxuICAgICAgICBQcm9taXNlLnJlc29sdmUoW10gYXMgTm92ZWxbXSksXG4gICAgKVxufVxuIiwiaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnXG5pbXBvcnQgdHlwZSBOb3ZlbCBmcm9tICdAL3R5cGVzL25vdmVsJ1xuaW1wb3J0IE5vdmVsRnVsbCBmcm9tICcuL2Z1bGwnXG5pbXBvcnQgTm92ZWxOZXcgZnJvbSAnLi9uZXcnXG5pbXBvcnQgTm92ZWxIb3QgZnJvbSAnLi9ob3QnXG5pbXBvcnQgTm92ZWxHZW5yZSBmcm9tICcuL2dlbnJlJ1xuZG90ZW52LmNvbmZpZygpXG5cbnR5cGUgTm92ZWxDcmF3bGVyVHlwZSA9ICdmdWxsJyB8ICdpbmZvJyB8ICduZXcnIHwgJ2hvdCcgfCAnZ2VucmUnIHwgJ2NoYXB0ZXInXG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIE5vdmVsQ3Jhd2xlcihcbiAgICB0eXBlOiBOb3ZlbENyYXdsZXJUeXBlLFxuICAgIHBhZ2U6IG51bWJlciA9IDEsXG4gICAgYXJnOiBzdHJpbmcgPSAnJyxcbik6IFByb21pc2U8Tm92ZWxbXT4ge1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdmdWxsJzpcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBOb3ZlbEZ1bGwocGFnZSlcbiAgICAgICAgY2FzZSAnbmV3JzpcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBOb3ZlbE5ldyhwYWdlKVxuICAgICAgICBjYXNlICdob3QnOlxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IE5vdmVsSG90KHBhZ2UpXG4gICAgICAgIGNhc2UgJ2dlbnJlJzpcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBOb3ZlbEdlbnJlKGFyZywgcGFnZSlcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBbXVxuICAgIH1cbn1cbiIsImltcG9ydCBpbnN0YW5jZSBmcm9tICdAL2xpYi9pbnN0YW5jZSdcbmltcG9ydCBzdHJpbmcyaHRtbCBmcm9tICdAL2xpYi9zdHJpbmcyaHRtbCdcblxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnXG5pbXBvcnQgTm92ZWxDaGFwdGVyIGZyb20gJy4vY2hhcHRlci9saXN0J1xuaW1wb3J0IGF4aW9zUmV0cnkgZnJvbSAnYXhpb3MtcmV0cnknXG5kb3RlbnYuY29uZmlnKClcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gTm92ZWxJbmZvKG5vdmVsX2lkOiBzdHJpbmcpIHtcbiAgICBheGlvc1JldHJ5KGluc3RhbmNlIGFzIGFueSwgeyByZXRyaWVzOiA1IH0pXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBkYXRhOiBwYWdlU3RyaW5nIH0gPSBhd2FpdCBpbnN0YW5jZS5nZXQobm92ZWxfaWQpXG5cbiAgICAgICAgY29uc3QgcGFnZUhUTUwgPSBhd2FpdCBzdHJpbmcyaHRtbChwYWdlU3RyaW5nKVxuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gcGFnZUhUTUwucXVlcnlTZWxlY3RvcignLnRpdGxlJyk/LnRleHRDb250ZW50ID8/ICcnXG5cbiAgICAgICAgY29uc3QgY292ZXJfaW1nX3VybCA9IHBhZ2VIVE1MXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignLmJvb2sgPiBpbWc6bnRoLWNoaWxkKDEpJylcbiAgICAgICAgICAgID8uZ2V0QXR0cmlidXRlKCdzcmMnKVxuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gcGFnZUhUTUwucXVlcnlTZWxlY3RvcignLmRlc2MtdGV4dCcpPy5pbm5lckhUTUxcblxuICAgICAgICBjb25zdCBhdXRob3JIVE1MOiBIVE1MQW5jaG9yRWxlbWVudCA9IHBhZ2VIVE1MLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAnLmluZm8gPiBkaXY6bnRoLWNoaWxkKDEpID4gYTpudGgtY2hpbGQoMiknLFxuICAgICAgICApIGFzIEhUTUxBbmNob3JFbGVtZW50XG5cbiAgICAgICAgY29uc3QgYXV0aG9yID0gYXV0aG9ySFRNTD8udGV4dENvbnRlbnRcbiAgICAgICAgY29uc3QgYXV0aG9yX2lkID0gKGF1dGhvckhUTUwuZ2V0QXR0cmlidXRlKCdocmVmJykgYXMgc3RyaW5nKVxuICAgICAgICAgICAgLnJlcGxhY2UocHJvY2Vzcy5lbnYuV0VCX0NSQVdMRVJfVVJMID8/ICcnLCAnJylcbiAgICAgICAgICAgIC5yZXBsYWNlKCcvdGFjLWdpYScsICcnKVxuICAgICAgICAgICAgLnJlcGxhY2VBbGwoJy8nLCAnJylcblxuICAgICAgICBjb25zdCBnZW5yZXMgPSBBcnJheS5mcm9tKFxuICAgICAgICAgICAgcGFnZUhUTUwucXVlcnlTZWxlY3RvckFsbCgnLmluZm8gPiBkaXY6bnRoLWNoaWxkKDIpID4gYScpLFxuICAgICAgICApLm1hcChnZW5yZSA9PiAoe1xuICAgICAgICAgICAgbmFtZTogZ2VucmUudGV4dENvbnRlbnQsXG4gICAgICAgICAgICBpZDogKGdlbnJlLmdldEF0dHJpYnV0ZSgnaHJlZicpIGFzIHN0cmluZylcbiAgICAgICAgICAgICAgICAucmVwbGFjZShwcm9jZXNzLmVudi5XRUJfQ1JBV0xFUl9VUkwgPz8gJycsICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKCcvdGhlLWxvYWknLCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZUFsbCgnLycsICcnKSxcbiAgICAgICAgfSkpXG5cbiAgICAgICAgY29uc3QgY3JlID0gcGFnZUhUTUwucXVlcnlTZWxlY3RvcignLnNvdXJjZScpPy50ZXh0Q29udGVudFxuXG4gICAgICAgIGNvbnN0IHN0YXR1cyA9IHBhZ2VIVE1MLnF1ZXJ5U2VsZWN0b3IoJy50ZXh0LXN1Y2Nlc3MnKT8udGV4dENvbnRlbnRcblxuICAgICAgICBjb25zdCBjaGFwdGVycyA9IGF3YWl0IE5vdmVsQ2hhcHRlcihub3ZlbF9pZClcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbm92ZWxfaWQsXG4gICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgIGNvdmVyX2ltZ191cmwsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgICAgICAgIG5hbWU6IGF1dGhvcixcbiAgICAgICAgICAgICAgICBpZDogYXV0aG9yX2lkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdlbnJlcyxcbiAgICAgICAgICAgIGNyZSxcbiAgICAgICAgICAgIHN0YXR1cyxcbiAgICAgICAgICAgIGNoYXB0ZXJzLFxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXJyb3I6IGVycm9yLm1lc3NhZ2UsXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgaW5zdGFuY2UgZnJvbSAnQC9saWIvaW5zdGFuY2UnXG5pbXBvcnQgc3RyaW5nMmh0bWwgZnJvbSAnQC9saWIvc3RyaW5nMmh0bWwnXG5pbXBvcnQgcGFnZXNKc29uIGZyb20gJ0AvY3Jhd2xlci9qc29uL3BhZ2VzLmpzb24nXG5cbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52J1xuaW1wb3J0IHsgZ2V0SW5mbyB9IGZyb20gJy4vZ2xvYmFsJ1xuaW1wb3J0IHR5cGUgTm92ZWwgZnJvbSAnQC90eXBlcy9ub3ZlbCdcbmRvdGVudi5jb25maWcoKVxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBOb3ZlbE5ldyhwYWdlOiBudW1iZXIgPSAxKTogUHJvbWlzZTxOb3ZlbFtdPiB7XG4gICAgY29uc3QgeyBkYXRhOiBwYWdlU3RyaW5nIH0gPSBhd2FpdCBpbnN0YW5jZS5nZXQoXG4gICAgICAgIGAke3BhZ2VzSnNvbi5uZXd9L3RyYW5nLSR7cGFnZX1gLFxuICAgIClcblxuICAgIGNvbnN0IHBhZ2VIVE1MID0gYXdhaXQgc3RyaW5nMmh0bWwocGFnZVN0cmluZylcblxuICAgIGNvbnN0IG5vdmVsczogTm9kZUxpc3RPZjxIVE1MRGl2RWxlbWVudD4gPSBwYWdlSFRNTC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAnZGl2LmNvbC1zbS0xMjpudGgtY2hpbGQoMSkgPiBkaXY6bnRoLWNoaWxkKDIpID4gZGl2LnJvdycsXG4gICAgKSBhcyBOb2RlTGlzdE9mPEhUTUxEaXZFbGVtZW50PlxuXG4gICAgcmV0dXJuIEFycmF5LmZyb20obm92ZWxzKS5yZWR1Y2UoXG4gICAgICAgIGFzeW5jIChwcm9taXNlLCBub3ZlbCkgPT4ge1xuICAgICAgICAgICAgYXdhaXQgcHJvbWlzZVxuXG4gICAgICAgICAgICByZXR1cm4gWy4uLihhd2FpdCBwcm9taXNlKSwgYXdhaXQgZ2V0SW5mbyhub3ZlbCBhcyBIVE1MRGl2RWxlbWVudCldXG4gICAgICAgIH0sXG4gICAgICAgIFByb21pc2UucmVzb2x2ZShbXSBhcyBOb3ZlbFtdKSxcbiAgICApXG59XG4iLCJpbXBvcnQgZXhwcmVzcywgeyB0eXBlIEFwcGxpY2F0aW9uIH0gZnJvbSAnZXhwcmVzcydcblxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnXG5pbXBvcnQgY29ycyBmcm9tICdjb3JzJ1xuaW1wb3J0IHJvdXRlciBmcm9tICdAL3JvdXRlcy9yb3V0ZXInXG5cbmltcG9ydCAnQC9yb3V0ZXMnXG5cbmRvdGVudi5jb25maWcoKVxuXG5jb25zdCBhcHA6IEFwcGxpY2F0aW9uID0gZXhwcmVzcygpXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVFxuXG5hcHAudXNlKGNvcnMoeyBvcmlnaW46ICcqJyB9KSlcbmFwcC51c2UoZXhwcmVzcy5qc29uKCkpXG5hcHAudXNlKGV4cHJlc3MudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKVxuYXBwLnVzZShleHByZXNzLnN0YXRpYygncHVibGljJykpXG5cbmFwcC51c2UocHJvY2Vzcy5lbnYuUFJFRklYX0FQSSB8fCAnL2FwaS92MScsIHJvdXRlcilcblxuY29uc3Qgc2VydmVyID0gYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coYFNlcnZlciBpcyBydW5uaW5nIG9uIGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWApXG59KVxuXG5zZXJ2ZXIua2VlcEFsaXZlVGltZW91dCA9IDEyMCAqIDEwMDBcbnNlcnZlci5oZWFkZXJzVGltZW91dCA9IDEyMCAqIDEwMDBcbiIsImltcG9ydCBheGlvcywgeyBBeGlvc0luc3RhbmNlIH0gZnJvbSAnYXhpb3MnXG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcbmRvdGVudi5jb25maWcoKVxuXG5jb25zdCBpbnN0YW5jZTogQXhpb3NJbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4gICAgYmFzZVVSTDogcHJvY2Vzcy5lbnYuV0VCX0NSQVdMRVJfVVJMLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ1VzZXItQWdlbnQnOiBwcm9jZXNzLmVudi5VU0VSX0FHRU5ULFxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgdGltZW91dDogMTAwMDAsXG59KVxuXG5leHBvcnQgZGVmYXVsdCBpbnN0YW5jZVxuIiwiaW1wb3J0IHsgSlNET00gfSBmcm9tICdqc2RvbSdcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gc3RyaW5nMmh0bWwoaHRtbDogc3RyaW5nKSB7XG4gICAgY29uc3QgcGFyc2VyID0gbmV3IEpTRE9NKGh0bWwpXG4gICAgcmV0dXJuIHBhcnNlci53aW5kb3cuZG9jdW1lbnRcbn1cbiIsImltcG9ydCBHZW5yZXNDb250cm9sbGVyIGZyb20gJ0AvY29udHJvbGxlcnMvZ2VucmVzJ1xuaW1wb3J0IHJvdXRlciBmcm9tICcuL3JvdXRlcidcblxuY29uc3QgZ2VucmVzID0gbmV3IEdlbnJlc0NvbnRyb2xsZXIoKVxuXG5yb3V0ZXIuZ2V0KCcvZ2VucmUnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdlbnJlcy5nZXRBbGwoKVxuICAgIHJlcy5qc29uKHJlc3BvbnNlKVxufSlcbiIsImltcG9ydCBzd2FnZ2VyVWkgZnJvbSAnc3dhZ2dlci11aS1leHByZXNzJ1xuaW1wb3J0IHN3YWdnZXJDb25maWcgZnJvbSAnLi4vLi4vYnVpbGQvc3dhZ2dlci5qc29uJ1xuXG5pbXBvcnQgJy4vZ2VucmVzJ1xuaW1wb3J0ICcuL25vdmVsJ1xuXG5pbXBvcnQgcm91dGVyIGZyb20gJy4vcm91dGVyJ1xuXG5yb3V0ZXIudXNlKCcvZG9jcycsIHN3YWdnZXJVaS5zZXJ2ZSwgc3dhZ2dlclVpLnNldHVwKHN3YWdnZXJDb25maWcpKVxuXG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgZGlyID0gcHJvY2Vzcy5jd2QoKVxuICAgIHJlcy5zZW5kRmlsZShgJHtkaXJ9L2luZGV4Lmh0bWxgKVxufSlcbiIsImltcG9ydCBOb3ZlbENvbnRyb2xsZXIgZnJvbSAnQC9jb250cm9sbGVycy9ub3ZlbCdcbmltcG9ydCByb3V0ZXIgZnJvbSAnQC9yb3V0ZXMvcm91dGVyJ1xuXG5jb25zdCB7XG4gICAgZ2V0Rmlyc3RQYWdlLFxuICAgIGdldFBhZ2UsXG4gICAgZ2V0TmV3Rmlyc3RQYWdlLFxuICAgIGdldE5ld1BhZ2UsXG4gICAgZ2V0Tm92ZWwsXG4gICAgZ2V0SG90Rmlyc3RQYWdlLFxuICAgIGdldEhvdFBhZ2UsXG4gICAgZ2V0R2VucmVGaXJzdFBhZ2UsXG4gICAgZ2V0R2VucmVQYWdlLFxuICAgIGdldENoYXB0ZXIsXG4gICAgcmVhZENoYXB0ZXIsXG59ID0gbmV3IE5vdmVsQ29udHJvbGxlcigpXG5cbnJvdXRlci5nZXQoJy9ub3ZlbCcsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IG5vdmVsRnVsbCA9IGF3YWl0IGdldEZpcnN0UGFnZSgpXG4gICAgcmVzLmpzb24obm92ZWxGdWxsKVxufSlcblxucm91dGVyLmdldCgnL25vdmVsL3RyYW5nLTpwYWdlJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgcGFnZSA9IHBhcnNlSW50KHJlcS5wYXJhbXMucGFnZSlcbiAgICBjb25zdCBub3ZlbEZ1bGwgPSBhd2FpdCBnZXRQYWdlKHBhZ2UpXG4gICAgcmVzLmpzb24obm92ZWxGdWxsKVxufSlcblxucm91dGVyLmdldCgnL25vdmVsL25ldycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IG5ld05vdmVsID0gYXdhaXQgZ2V0TmV3Rmlyc3RQYWdlKClcbiAgICByZXMuanNvbihuZXdOb3ZlbClcbn0pXG5cbnJvdXRlci5nZXQoJy9ub3ZlbC9uZXcvdHJhbmctOnBhZ2UnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBwYWdlID0gcGFyc2VJbnQocmVxLnBhcmFtcy5wYWdlKVxuICAgIGNvbnN0IGhvdCA9IGF3YWl0IGdldE5ld1BhZ2UocGFnZSlcbiAgICByZXMuanNvbihob3QpXG59KVxuXG5yb3V0ZXIuZ2V0KCcvbm92ZWwvaG90JywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgaG90ID0gYXdhaXQgZ2V0SG90Rmlyc3RQYWdlKClcbiAgICByZXMuanNvbihob3QpXG59KVxuXG5yb3V0ZXIuZ2V0KCcvbm92ZWwvaG90L3RyYW5nLTpwYWdlJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgcGFnZSA9IHBhcnNlSW50KHJlcS5wYXJhbXMucGFnZSlcbiAgICBjb25zdCBob3QgPSBhd2FpdCBnZXRIb3RQYWdlKHBhZ2UpXG5cbiAgICByZXMuanNvbihob3QpXG59KVxuXG5yb3V0ZXIuZ2V0KCcvbm92ZWwvZ2VucmUvOmdlbnJlJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgZ2VucmUgPSByZXEucGFyYW1zLmdlbnJlXG4gICAgY29uc3Qgbm92ZWxGdWxsID0gYXdhaXQgZ2V0R2VucmVGaXJzdFBhZ2UoZ2VucmUpXG4gICAgcmVzLmpzb24obm92ZWxGdWxsKVxufSlcblxucm91dGVyLmdldCgnL25vdmVsL2dlbnJlLzpnZW5yZS90cmFuZy06cGFnZScsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAgIGNvbnN0IGdlbnJlID0gcmVxLnBhcmFtcy5nZW5yZVxuICAgIGNvbnN0IHBhZ2UgPSBwYXJzZUludChyZXEucGFyYW1zLnBhZ2UpXG4gICAgY29uc3Qgbm92ZWxGdWxsID0gYXdhaXQgZ2V0R2VucmVQYWdlKGdlbnJlLCBwYWdlKVxuICAgIHJlcy5qc29uKG5vdmVsRnVsbClcbn0pXG5cbnJvdXRlci5nZXQoJy9ub3ZlbC86aWQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBjb25zdCBub3ZlbEluZm8gPSBhd2FpdCBnZXROb3ZlbChyZXEucGFyYW1zLmlkKVxuXG4gICAgcmVzLmpzb24obm92ZWxJbmZvKVxufSlcblxucm91dGVyLmdldCgnL25vdmVsLzppZC9jaGFwdGVyJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgY2hhcHRlciA9IGF3YWl0IGdldENoYXB0ZXIocmVxLnBhcmFtcy5pZClcbiAgICByZXMuanNvbihjaGFwdGVyKVxufSlcblxucm91dGVyLmdldCgnL25vdmVsLzppZC9jaGFwdGVyLzpjaGFwdGVyJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgY29uc3QgaWQgPSByZXEucGFyYW1zLmlkXG4gICAgY29uc3QgY2hhcHRlciA9IHBhcnNlSW50KHJlcS5wYXJhbXMuY2hhcHRlcilcbiAgICBjb25zdCBjb250ZW50ID0gYXdhaXQgcmVhZENoYXB0ZXIoaWQsIGNoYXB0ZXIpXG4gICAgcmVzLmpzb24oY29udGVudClcbn0pXG4iLCJpbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdleHByZXNzJ1xuXG5jb25zdCByb3V0ZXIgPSBSb3V0ZXIoKVxuZXhwb3J0IGRlZmF1bHQgcm91dGVyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvcy1yZXRyeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb3JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJleHByZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzZG9tXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN3YWdnZXItdWktZXhwcmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0c29hXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==