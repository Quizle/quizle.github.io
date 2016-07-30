System.register(["angular2/core", "./profileHandler", "../../achievement.service", "../../../quiz-game/quizTheme.service"], function(exports_1, context_1) {
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
    var core_1, profileHandler_1, achievement_service_1, quizTheme_service_1;
    var MultiAchievementHandler;
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
            function (quizTheme_service_1_1) {
                quizTheme_service_1 = quizTheme_service_1_1;
            }],
        execute: function() {
            MultiAchievementHandler = (function (_super) {
                __extends(MultiAchievementHandler, _super);
                function MultiAchievementHandler(_service, _themeService) {
                    _super.call(this);
                    this._service = _service;
                    this._themeService = _themeService;
                }
                MultiAchievementHandler.prototype.getAchieved = function (profile, gainedAchievements) {
                    var _this = this;
                    var achievements = [];
                    var geek = this.hasAchievement(gainedAchievements, "moviesMaster") &&
                        this.hasAchievement(gainedAchievements, "moviesMaster") &&
                        this.hasAchievement(gainedAchievements, "moviesMaster") &&
                        this.hasAchievement(gainedAchievements, "moviesMaster");
                    var beater = this._themeService.findAll().filter(function (theme) { return !_this.hasAchievement(gainedAchievements, theme.code + "Master"); });
                    if (geek && !this.hasAchievement(gainedAchievements, "geek")) {
                        achievements.push(this._service.getAchievementByKey("geek"));
                    }
                    if (beater.length == 0 && !this.hasAchievement(gainedAchievements, "beater")) {
                        achievements.push(this._service.getAchievementByKey("beater"));
                    }
                    return achievements;
                };
                MultiAchievementHandler = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [achievement_service_1.AchievementService, quizTheme_service_1.QuizThemeService])
                ], MultiAchievementHandler);
                return MultiAchievementHandler;
            }(profileHandler_1.ProfileHandler));
            exports_1("MultiAchievementHandler", MultiAchievementHandler);
        }
    }
});
//# sourceMappingURL=mutliAchievementHandler.js.map