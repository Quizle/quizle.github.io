System.register(["angular2/core", "angular2/router", "./achievement.service", "angular2/http", "rxjs/add/operator/map"], function(exports_1, context_1) {
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
    var core_1, router_1, achievement_service_1, http_1;
    var AchievementListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (achievement_service_1_1) {
                achievement_service_1 = achievement_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            AchievementListComponent = (function () {
                function AchievementListComponent(_service, _http) {
                    this._service = _service;
                    this._http = _http;
                }
                AchievementListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // You can clearly see we're getting tired here, f*ck quality ^^
                    var gained = this._service.getAchievementsFromLocalStorage();
                    this._http.get("app/json/achievements/achievements.json")
                        .map(function (res) { return res.json(); })
                        .subscribe(function (achievements) { return _this.achievements = achievements
                        .map(function (achievement) {
                        achievement.gained = gained.some(function (gainedAchievement) { return achievement.key === gainedAchievement.key; });
                        return achievement;
                    }); });
                };
                AchievementListComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [achievement_service_1.AchievementService],
                        selector: "achievement-list",
                        styles: ["\n        .item {\n            opacity: .5;\n        }\n\n        .item img {\n            opacity: .2;\n        }\n\n        .gained.item, .gained.item img {\n            opacity: 1;\n        }\n    "],
                        templateUrl: "app/achievement/achievementList.component.html"
                    }), 
                    __metadata('design:paramtypes', [achievement_service_1.AchievementService, http_1.Http])
                ], AchievementListComponent);
                return AchievementListComponent;
            }());
            exports_1("AchievementListComponent", AchievementListComponent);
        }
    }
});
//# sourceMappingURL=achievementList.component.js.map