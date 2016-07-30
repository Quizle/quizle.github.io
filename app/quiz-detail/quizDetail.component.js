System.register(["angular2/core", "angular2/router", "./quiz.service", "./quizTheme.service", "../shared/quiz-timer/quizTimer", "../shared/quiz-timer/quizTimer.component"], function(exports_1, context_1) {
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
    var core_1, router_1, quiz_service_1, quizTheme_service_1, quizTimer_1, quizTimer_component_1;
    var QuizDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (quiz_service_1_1) {
                quiz_service_1 = quiz_service_1_1;
            },
            function (quizTheme_service_1_1) {
                quizTheme_service_1 = quizTheme_service_1_1;
            },
            function (quizTimer_1_1) {
                quizTimer_1 = quizTimer_1_1;
            },
            function (quizTimer_component_1_1) {
                quizTimer_component_1 = quizTimer_component_1_1;
            }],
        execute: function() {
            QuizDetailComponent = (function () {
                function QuizDetailComponent(_service, _themeService, _routeParams) {
                    this._service = _service;
                    this._themeService = _themeService;
                    this._routeParams = _routeParams;
                }
                QuizDetailComponent.prototype.getLetter = function (index) {
                    return String.fromCharCode(97 + index);
                };
                QuizDetailComponent.prototype.getNextQuestion = function () {
                    var _this = this;
                    this._service.getQuestion(this.theme).then(function (question) {
                        _this.question = question;
                        _this.timer = new quizTimer_1.QuizTimer(20, 20);
                    });
                };
                QuizDetailComponent.prototype.setAnswer = function (answer) {
                    if (answer == null) {
                        console.log("Not in time!");
                    }
                    else if (this.question.correct === answer) {
                        console.log("Good!");
                    }
                    else {
                        console.log("Bad");
                    }
                    this.getNextQuestion();
                };
                QuizDetailComponent.prototype.ngOnInit = function () {
                    this.theme = this._themeService.toQuizTheme(this._routeParams.get("theme"));
                    this.getNextQuestion();
                };
                QuizDetailComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES, quizTimer_component_1.QuizTimerComponent],
                        providers: [quiz_service_1.QuizService, quizTheme_service_1.QuizThemeService],
                        selector: 'quiz-detail',
                        styles: ["\n        .answer {\n            margin: 5px 0;\n        }\n    "],
                        templateUrl: 'app/quiz-detail/quizDetail.component.html'
                    }), 
                    __metadata('design:paramtypes', [quiz_service_1.QuizService, quizTheme_service_1.QuizThemeService, router_1.RouteParams])
                ], QuizDetailComponent);
                return QuizDetailComponent;
            }());
            exports_1("QuizDetailComponent", QuizDetailComponent);
        }
    }
});
//# sourceMappingURL=quizDetail.component.js.map