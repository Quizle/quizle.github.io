System.register(["angular2/core", "./profileHandler", "../../achievement.service", "../../../quiz-game/quizThemeKind"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, profileHandler_1, achievement_service_1, quizThemeKind_1;
    var ScoreHandler;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profileHandler_1_1) {
                profileHandler_1 = profileHandler_1_1;
            },
            function (achievement_service_1_1) {
                achievement_service_1 = achievement_service_1_1;
            },
            function (quizThemeKind_1_1) {
                quizThemeKind_1 = quizThemeKind_1_1;
            }],
        execute: function() {
            ScoreHandler = (function (_super) {
                __extends(ScoreHandler, _super);
                function ScoreHandler(_service) {
                    _super.call(this);
                    this._service = _service;
                }
                ScoreHandler.prototype.getAchieved = function (profile, gainedAchievements, answer, completed) {
                    var achievements = [];
                    if (completed != null) {
                        if (completed.correct == 0 && !this.hasAchievement(gainedAchievements, "zeroScore")) {
                            achievements.push(this._service.getAchievementByKey("zeroScore"));
                        }
                        if (completed.correct == 1 && !this.hasAchievement(gainedAchievements, "oneScore")) {
                            achievements.push(this._service.getAchievementByKey("oneScore"));
                        }
                        if (completed.correct < 5 && completed.theme.kind == quizThemeKind_1.QuizThemeKind.KIDS && !this.hasAchievement(gainedAchievements, "kindergarten")) {
                            achievements.push(this._service.getAchievementByKey("kindergarten"));
                        }
                    }
                    if (profile.wrong >= 20 && !this.hasAchievement(gainedAchievements, "loser")) {
                        achievements.push(this._service.getAchievementByKey("loser"));
                    }
                    if (answer != null) {
                        if (answer.correct && !this.hasAchievement(gainedAchievements, "newbie")) {
                            achievements.push(this._service.getAchievementByKey("newbie"));
                        }
                        if (!answer.correct && !this.hasAchievement(gainedAchievements, "fail")) {
                            achievements.push(this._service.getAchievementByKey("fail"));
                        }
                    }
                    return achievements;
                };
                ScoreHandler = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [achievement_service_1.AchievementService])
                ], ScoreHandler);
                return ScoreHandler;
            }(profileHandler_1.ProfileHandler));
            exports_1("ScoreHandler", ScoreHandler);
        }
    }
});
//# sourceMappingURL=scoreHandler.js.map