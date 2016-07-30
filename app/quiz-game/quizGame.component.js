System.register(["angular2/core", "./quiz-detail/quizDetail.component", "angular2/router", "./quizTheme.service", "../achievement/events/achievementEvent.service", "../achievement/achievement.service", "../achievement/events/handlers/completedGamesHandler", "../achievement/profile/profile.service", "../achievement/events/handlers/comboHandler", "../achievement/events/handlers/answerAmountHandler", "../achievement/events/handlers/masterThemeHandler", "../achievement/events/handlers/mutliAchievementHandler", "../achievement/events/handlers/scoreHandler", "../achievement/events/handlers/secretHandler"], function(exports_1, context_1) {
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
    var core_1, quizDetail_component_1, router_1, quizTheme_service_1, achievementEvent_service_1, achievement_service_1, completedGamesHandler_1, profile_service_1, comboHandler_1, answerAmountHandler_1, masterThemeHandler_1, mutliAchievementHandler_1, scoreHandler_1, secretHandler_1;
    var QuizGameComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (quizDetail_component_1_1) {
                quizDetail_component_1 = quizDetail_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (quizTheme_service_1_1) {
                quizTheme_service_1 = quizTheme_service_1_1;
            },
            function (achievementEvent_service_1_1) {
                achievementEvent_service_1 = achievementEvent_service_1_1;
            },
            function (achievement_service_1_1) {
                achievement_service_1 = achievement_service_1_1;
            },
            function (completedGamesHandler_1_1) {
                completedGamesHandler_1 = completedGamesHandler_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            },
            function (comboHandler_1_1) {
                comboHandler_1 = comboHandler_1_1;
            },
            function (answerAmountHandler_1_1) {
                answerAmountHandler_1 = answerAmountHandler_1_1;
            },
            function (masterThemeHandler_1_1) {
                masterThemeHandler_1 = masterThemeHandler_1_1;
            },
            function (mutliAchievementHandler_1_1) {
                mutliAchievementHandler_1 = mutliAchievementHandler_1_1;
            },
            function (scoreHandler_1_1) {
                scoreHandler_1 = scoreHandler_1_1;
            },
            function (secretHandler_1_1) {
                secretHandler_1 = secretHandler_1_1;
            }],
        execute: function() {
            QuizGameComponent = (function () {
                function QuizGameComponent(_router, _routeParams, _themeService, _eventService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._themeService = _themeService;
                    this._eventService = _eventService;
                    this.total = 10;
                }
                QuizGameComponent.prototype.ngOnInit = function () {
                    this.theme = this._themeService.findOne(this._routeParams.get("theme"));
                };
                QuizGameComponent.prototype.completed = function (status) {
                    QuizGameComponent.lastStatus = status;
                    this._eventService.completedEvents.emit(status);
                    this._router.navigate(["End"]);
                };
                QuizGameComponent.prototype.answered = function (status) {
                    this._eventService.answeredEvents.emit(status);
                };
                QuizGameComponent = __decorate([
                    core_1.Component({
                        directives: [quizDetail_component_1.QuizDetailComponent],
                        providers: [quizTheme_service_1.QuizThemeService, achievementEvent_service_1.AchievementEventService, achievement_service_1.AchievementService, completedGamesHandler_1.CompletedGamesHandler, comboHandler_1.ComboHandler, answerAmountHandler_1.AnswerAmountHandler, masterThemeHandler_1.MasterThemeHandler, mutliAchievementHandler_1.MultiAchievementHandler, scoreHandler_1.ScoreHandler, secretHandler_1.SecretHandler, profile_service_1.ProfileService],
                        selector: "quiz-game",
                        templateUrl: "app/quiz-game/quizGame.component.html"
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.RouteParams, quizTheme_service_1.QuizThemeService, achievementEvent_service_1.AchievementEventService])
                ], QuizGameComponent);
                return QuizGameComponent;
            }());
            exports_1("QuizGameComponent", QuizGameComponent);
        }
    }
});
//# sourceMappingURL=quizGame.component.js.map