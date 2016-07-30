System.register(["angular2/core", "./quiz.service", "../quizTheme", "../../shared/quiz-timer/quizTimer", "../../shared/quiz-timer/quizTimer.component", "ng2-toastr/ng2-toastr", "angular2/http", "../quizStatus", "../answerStatus", "angular2/router", "../../points/point.component", "../../booster/booster.component", "../../booster/booster.service", "../quiz-secret/quizSecret.component"], function(exports_1, context_1) {
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
    var core_1, quiz_service_1, quizTheme_1, quizTimer_1, quizTimer_component_1, ng2_toastr_1, http_1, quizStatus_1, answerStatus_1, router_1, point_component_1, booster_component_1, booster_service_1, quizSecret_component_1;
    var QuizDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (quiz_service_1_1) {
                quiz_service_1 = quiz_service_1_1;
            },
            function (quizTheme_1_1) {
                quizTheme_1 = quizTheme_1_1;
            },
            function (quizTimer_1_1) {
                quizTimer_1 = quizTimer_1_1;
            },
            function (quizTimer_component_1_1) {
                quizTimer_component_1 = quizTimer_component_1_1;
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (quizStatus_1_1) {
                quizStatus_1 = quizStatus_1_1;
            },
            function (answerStatus_1_1) {
                answerStatus_1 = answerStatus_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (point_component_1_1) {
                point_component_1 = point_component_1_1;
            },
            function (booster_component_1_1) {
                booster_component_1 = booster_component_1_1;
            },
            function (booster_service_1_1) {
                booster_service_1 = booster_service_1_1;
            },
            function (quizSecret_component_1_1) {
                quizSecret_component_1 = quizSecret_component_1_1;
            }],
        execute: function() {
            QuizDetailComponent = (function () {
                function QuizDetailComponent(_service, _toastr) {
                    this._service = _service;
                    this._toastr = _toastr;
                    this.completed = new core_1.EventEmitter(false);
                    this.answered = new core_1.EventEmitter(false);
                    this.currentQuestion = 1;
                    this.guessed = false;
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
                    var _this = this;
                    this.guessed = true;
                    this._handleAnswer(answer);
                    setTimeout(function () {
                        _this.currentQuestion += 1;
                        _this.guessed = false;
                        if (_this.currentQuestion > _this.totalQuestions) {
                            _this.completed.emit(_this._status);
                        }
                        else {
                            _this.getNextQuestion();
                        }
                    }, 1000);
                };
                QuizDetailComponent.prototype._handleAnswer = function (answer) {
                    if (answer == null) {
                        this._toastr.error("Too bad, you didn't answer the question in time.");
                        this.answered.emit(new answerStatus_1.AnswerStatus(false, this.theme));
                        this._status.wrong += 1;
                    }
                    else if (this.question.correct === answer) {
                        this._toastr.success("Correct!");
                        this.answered.emit(new answerStatus_1.AnswerStatus(true, this.theme));
                        this._status.correct += 1;
                    }
                    else {
                        this._toastr.error("That was not the correct answer.");
                        this.answered.emit(new answerStatus_1.AnswerStatus(false, this.theme));
                        this._status.wrong += 1;
                    }
                };
                QuizDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._status = new quizStatus_1.QuizStatus(this.totalQuestions, this.theme);
                    QuizDetailComponent.increaseTime.subscribe(function (booster) { return _this._increaseTime(booster); });
                    QuizDetailComponent.remove.subscribe(function (booster) { return _this._deleteWrongAnswer(booster); });
                    this.getNextQuestion();
                };
                QuizDetailComponent.prototype._increaseTime = function (data) {
                    this.timer.bonus += 5;
                    QuizDetailComponent.increaseTimeSuccess.emit(data);
                };
                QuizDetailComponent.prototype._deleteWrongAnswer = function (data) {
                    if (this.question.answers.length <= 2) {
                        this._toastr.error("There are only " + this.question.answers.length + " answers, guess the right one!", "Not enough answers to delete");
                    }
                    else {
                        var index = Math.floor(Math.random() * this.question.answers.length);
                        while (this.question.correct === this.question.answers[index]) {
                            index = Math.floor(Math.random() * this.question.answers.length);
                        }
                        this.question.answers.splice(index, 1);
                        QuizDetailComponent.removeSuccess.emit(data);
                    }
                };
                QuizDetailComponent.increaseTime = new core_1.EventEmitter(false);
                QuizDetailComponent.increaseTimeSuccess = new core_1.EventEmitter(false);
                QuizDetailComponent.remove = new core_1.EventEmitter(false);
                QuizDetailComponent.removeSuccess = new core_1.EventEmitter(false);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', quizTheme_1.QuizTheme)
                ], QuizDetailComponent.prototype, "theme", void 0);
                __decorate([
                    core_1.Input("questions"), 
                    __metadata('design:type', Number)
                ], QuizDetailComponent.prototype, "totalQuestions", void 0);
                __decorate([
                    core_1.Output("completed"), 
                    __metadata('design:type', core_1.EventEmitter)
                ], QuizDetailComponent.prototype, "completed", void 0);
                __decorate([
                    core_1.Output("answered"), 
                    __metadata('design:type', core_1.EventEmitter)
                ], QuizDetailComponent.prototype, "answered", void 0);
                QuizDetailComponent = __decorate([
                    core_1.Component({
                        directives: [quizTimer_component_1.QuizTimerComponent, point_component_1.PointComponent, router_1.ROUTER_DIRECTIVES, booster_component_1.BoosterComponent, quizSecret_component_1.QuizSecretComponent],
                        providers: [quiz_service_1.QuizService, ng2_toastr_1.ToastsManager, http_1.HTTP_PROVIDERS, booster_service_1.BoosterService],
                        selector: 'quiz-detail',
                        styles: ["\n        .answer {\n            margin: 5px 0;\n        }\n        .ui.button.correct:disabled {\n            opacity: 1 !important;\n        }\n    "],
                        templateUrl: 'app/quiz-game/quiz-detail/quizDetail.component.html'
                    }), 
                    __metadata('design:paramtypes', [quiz_service_1.QuizService, ng2_toastr_1.ToastsManager])
                ], QuizDetailComponent);
                return QuizDetailComponent;
            }());
            exports_1("QuizDetailComponent", QuizDetailComponent);
        }
    }
});
//# sourceMappingURL=quizDetail.component.js.map