System.register(["angular2/core", "./themeProfile", "./handlers/completedGamesHandler", "../achievement.service", "../profile/profile.service", "./handlers/comboHandler", "./handlers/answerAmountHandler", "./handlers/masterThemeHandler", "./handlers/mutliAchievementHandler", "./handlers/scoreHandler", "./handlers/secretHandler"], function(exports_1, context_1) {
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
    var core_1, themeProfile_1, completedGamesHandler_1, achievement_service_1, profile_service_1, comboHandler_1, answerAmountHandler_1, masterThemeHandler_1, mutliAchievementHandler_1, scoreHandler_1, secretHandler_1;
    var AchievementEventService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (themeProfile_1_1) {
                themeProfile_1 = themeProfile_1_1;
            },
            function (completedGamesHandler_1_1) {
                completedGamesHandler_1 = completedGamesHandler_1_1;
            },
            function (achievement_service_1_1) {
                achievement_service_1 = achievement_service_1_1;
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
            AchievementEventService = (function () {
                function AchievementEventService(_achievementService, _profileService, completedHandler, comboHandler, secretHandler, answerAmountHandler, masterThemeHandler, multiAchievementHandler, scoreHandler) {
                    var _this = this;
                    this._achievementService = _achievementService;
                    this._profileService = _profileService;
                    this.completedEvents = new core_1.EventEmitter();
                    this.answeredEvents = new core_1.EventEmitter();
                    this.secretEvents = new core_1.EventEmitter();
                    this._handlers = [completedHandler, comboHandler, answerAmountHandler, masterThemeHandler, multiAchievementHandler, scoreHandler, secretHandler];
                    this.completedEvents.subscribe(function (data) { return _this._handleCompleted(data); });
                    this.answeredEvents.subscribe(function (data) { return _this._handleAnswered(data); });
                    this.secretEvents.subscribe(function (data) { return _this._handleSecret(data); });
                }
                AchievementEventService.prototype._handleCompleted = function (status) {
                    var profile = this._profileService.getProfile();
                    var themeProfile = this._getThemeProfile(profile, status.theme);
                    themeProfile.completedGames = themeProfile.completedGames == null ? 1 : themeProfile.completedGames + 1;
                    profile.completedGames = profile.completedGames == null ? 1 : profile.completedGames + 1;
                    this._storeProfileInfo(profile, this._getAchieved(profile, null, status));
                };
                AchievementEventService.prototype._handleAnswered = function (status) {
                    var profile = this._profileService.getProfile();
                    var themeProfile = this._getThemeProfile(profile, status.theme);
                    if (status.correct) {
                        themeProfile.consecutively = themeProfile.consecutively == null ? 1 : themeProfile.consecutively + 1;
                        themeProfile.correct = themeProfile.correct == null ? 1 : themeProfile.correct + 1;
                        profile.consecutively = profile.consecutively == null ? 1 : profile.consecutively + 1;
                        profile.correct = profile.correct == null ? 1 : profile.correct += 1;
                    }
                    else {
                        themeProfile.consecutively = 0;
                        themeProfile.wrong = themeProfile.wrong == null ? 1 : themeProfile.wrong + 1;
                        profile.consecutively = 0;
                        profile.wrong = profile.wrong == null ? 1 : profile.wrong + 1;
                    }
                    this._storeProfileInfo(profile, this._getAchieved(profile, status));
                };
                AchievementEventService.prototype._storeProfileInfo = function (profile, achievements) {
                    var rewarded = this._getPoints(achievements);
                    profile.points = profile.points == null ? rewarded : profile.points + rewarded;
                    this._storeAchieved(achievements);
                    this._profileService.saveProfile(profile);
                };
                AchievementEventService.prototype._handleSecret = function (secret) {
                    var profile = this._profileService.getProfile();
                    this._storeProfileInfo(profile, this._getAchieved(profile, null, null, secret));
                };
                AchievementEventService.prototype._getThemeProfile = function (profile, theme) {
                    var currentThemeProfile = profile.themeProfiles.find(function (themeProfile) { return themeProfile.theme.kind == theme.kind; });
                    if (currentThemeProfile == null) {
                        var themeProfile = new themeProfile_1.ThemeProfile(theme);
                        profile.themeProfiles.push(themeProfile);
                        return themeProfile;
                    }
                    else {
                        return currentThemeProfile;
                    }
                };
                AchievementEventService.prototype._storeAchieved = function (achievements) {
                    var _this = this;
                    achievements.filter(function (achievement) { return achievement != null; }).forEach(function (achievement) {
                        console.log("New achievement", achievement);
                        _this._achievementService.pushAchievementToLocalStorage(achievement);
                        AchievementEventService.achievementEvents.emit(achievement);
                    });
                };
                AchievementEventService.prototype._getPoints = function (achievements) {
                    var points = achievements.map(function (achievement) { return achievement.points; });
                    return points != null && points.length > 0 ? points.reduce(function (p1, p2) { return p1 + p2; }) : 0;
                };
                AchievementEventService.prototype._getAchieved = function (profile, answer, completed, secret) {
                    if (answer === void 0) { answer = null; }
                    if (completed === void 0) { completed = null; }
                    if (secret === void 0) { secret = null; }
                    var achievements = this._achievementService.getAchievementsFromLocalStorage();
                    var gained = this._handlers.map(function (handler) { return handler.getAchieved(profile, achievements, answer, completed, secret); });
                    return [].concat.apply([], gained); // Flat map
                };
                AchievementEventService.achievementEvents = new core_1.EventEmitter();
                AchievementEventService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [achievement_service_1.AchievementService, profile_service_1.ProfileService, completedGamesHandler_1.CompletedGamesHandler, comboHandler_1.ComboHandler, secretHandler_1.SecretHandler, answerAmountHandler_1.AnswerAmountHandler, masterThemeHandler_1.MasterThemeHandler, mutliAchievementHandler_1.MultiAchievementHandler, scoreHandler_1.ScoreHandler])
                ], AchievementEventService);
                return AchievementEventService;
            }());
            exports_1("AchievementEventService", AchievementEventService);
        }
    }
});
//# sourceMappingURL=achievementEvent.service.js.map