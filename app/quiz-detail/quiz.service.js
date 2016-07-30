System.register(["angular2/core", "angular2/http", "./quizTheme.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, quizTheme_service_1;
    var QuizService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (quizTheme_service_1_1) {
                quizTheme_service_1 = quizTheme_service_1_1;
            }],
        execute: function() {
            QuizService = (function () {
                function QuizService(_http, _themeService) {
                    this._http = _http;
                    this._themeService = _themeService;
                    this._questions = new Map();
                }
                QuizService.prototype.getQuestion = function (theme) {
                    return this._getQuestions(theme).then(function (questions) {
                        var idx = Math.floor(Math.random() * questions.length);
                        return questions[idx];
                    });
                };
                QuizService.prototype._getQuestions = function (theme) {
                    var _this = this;
                    if (this._questions.get(theme) != null) {
                        return new Promise(function (resolve) { return resolve(_this._questions.get(theme)); });
                    }
                    else {
                        var promise = this._http
                            .get("app/json/themes/" + this._themeService.toString(theme) + ".json")
                            .map(function (data) { return data.json(); })
                            .toPromise();
                        promise.then(function (data) { return _this._questions.set(theme, data); });
                        return promise;
                    }
                };
                QuizService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, quizTheme_service_1.QuizThemeService])
                ], QuizService);
                return QuizService;
            }());
            exports_1("QuizService", QuizService);
        }
    }
});
//# sourceMappingURL=quiz.service.js.map