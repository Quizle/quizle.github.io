System.register(["angular2/http", "rxjs/add/operator/map", "angular2/core"], function(exports_1, context_1) {
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
    var http_1, core_1;
    var AchievementService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AchievementService = (function () {
                function AchievementService(_http) {
                    var _this = this;
                    this._http = _http;
                    this._achievementsUrl = "app/json/achievements/achievements.json";
                    _http.get(this._achievementsUrl).map(function (res) { return res.json(); }).subscribe(function (data) { return _this._achievements = data; });
                }
                AchievementService.prototype.getAchievementByKey = function (key) {
                    return this._achievements.find(function (achievement) { return achievement["key"] == key; });
                };
                AchievementService.prototype.pushAchievementToLocalStorage = function (achievement) {
                    var tmpAchievements = this.getAchievementsFromLocalStorage();
                    if (tmpAchievements.indexOf(achievement) == -1) {
                        tmpAchievements.push(achievement);
                        localStorage.setItem('achievements', JSON.stringify(tmpAchievements));
                    }
                };
                AchievementService.prototype.getAchievementsFromLocalStorage = function () {
                    return JSON.parse(localStorage.getItem('achievements') || "[]");
                };
                AchievementService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AchievementService);
                return AchievementService;
            }());
            exports_1("AchievementService", AchievementService);
        }
    }
});
//# sourceMappingURL=achievement.service.js.map