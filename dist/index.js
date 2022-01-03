"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var app = express_1.default();
var root = path_1.default.join(__dirname, '..', 'views', 'assets');
app.set('view engine', 'ejs');
app.set;
app.use('/static', express_1.default.static(root));
app.get('/', function (req, res) {
    res.render('index');
});
app.get('/favicon.ico', function (req, res) { return res.sendFile('favicon.ico', { root: root }); });
app.get('/embed', function (req, res) {
    var _a;
    res.render('embed', { config: (_a = req.query) !== null && _a !== void 0 ? _a : {} });
});
app.listen(process.env.PORT || 3000, function () { return console.log('Listening on :' + (process.env.PORT || 3000)); });
