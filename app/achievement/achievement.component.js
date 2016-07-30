System.register(["angular2/core", "angular2/router", "./achievement.service", "angular2/http"], function(exports_1, context_1) {
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
    var AchievementComponent;
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
            }],
        execute: function() {
            AchievementComponent = (function () {
                function AchievementComponent(_achievementService) {
                    this._achievementService = _achievementService;
                    // this._achievements = _achievementService.getAllAchievements().subscribe(data => this._achievements = data);
                }
                AchievementComponent.prototype.getAchievementByName = function () {
                    console.log(this._achievementService.getAchievementByKey('firstGame'));
                };
                AchievementComponent.prototype.ngOnInit = function () {
                    this._achievements = this._achievementService.getAchievementsFromLocalStorage();
                };
                AchievementComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES],
                        selector: "achievements",
                        styles: ["\n        .center {\n            text-align: center;\n        }\n    "],
                        templateUrl: "app/achievement/achievement.component.html",
                        providers: [achievement_service_1.AchievementService, http_1.HTTP_PROVIDERS],
                    }), 
                    __metadata('design:paramtypes', [achievement_service_1.AchievementService])
                ], AchievementComponent);
                return AchievementComponent;
            }());
            exports_1("AchievementComponent", AchievementComponent);
        }
    }
});
//# sourceMappingURL=achievement.component.js.map