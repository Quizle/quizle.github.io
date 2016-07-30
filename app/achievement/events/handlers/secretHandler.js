System.register(["./profileHandler", "angular2/core", "../../achievement.service"], function(exports_1, context_1) {
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
    var profileHandler_1, core_1, achievement_service_1;
    var SecretHandler;
    return {
        setters:[
            function (profileHandler_1_1) {
                profileHandler_1 = profileHandler_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (achievement_service_1_1) {
                achievement_service_1 = achievement_service_1_1;
            }],
        execute: function() {
            SecretHandler = (function (_super) {
                __extends(SecretHandler, _super);
                function SecretHandler(_service) {
                    _super.call(this);
                    this._service = _service;
                }
                SecretHandler.prototype.getAchieved = function (profile, gainedAchievements, answer, completed, secret) {
                    var achievements = [];
                    if (secret != null && !this.hasAchievement(gainedAchievements, secret)) {
                        achievements.push(this._service.getAchievementByKey(secret));
                    }
                    return achievements;
                };
                SecretHandler = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [achievement_service_1.AchievementService])
                ], SecretHandler);
                return SecretHandler;
            }(profileHandler_1.ProfileHandler));
            exports_1("SecretHandler", SecretHandler);
        }
    }
});
//# sourceMappingURL=secretHandler.js.map