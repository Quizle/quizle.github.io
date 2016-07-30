System.register(["angular2/core", "./point.service", "../achievement/achievement.service", "../booster/booster.service", "../achievement/events/achievementEvent.service"], function(exports_1, context_1) {
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
    var core_1, point_service_1, achievement_service_1, booster_service_1, achievementEvent_service_1;
    var PointComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (point_service_1_1) {
                point_service_1 = point_service_1_1;
            },
            function (achievement_service_1_1) {
                achievement_service_1 = achievement_service_1_1;
            },
            function (booster_service_1_1) {
                booster_service_1 = booster_service_1_1;
            },
            function (achievementEvent_service_1_1) {
                achievementEvent_service_1 = achievementEvent_service_1_1;
            }],
        execute: function() {
            PointComponent = (function () {
                function PointComponent(_pointService) {
                    this._pointService = _pointService;
                }
                PointComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._amountOfPoints = this._pointService.getTotalPoints();
                    point_service_1.PointService.totalPoints.subscribe(function (points) { return _this._amountOfPoints = points; });
                    achievementEvent_service_1.AchievementEventService.achievementEvents.subscribe(function () { return _this._amountOfPoints = _this._pointService.getTotalPoints(); });
                };
                PointComponent = __decorate([
                    core_1.Component({
                        selector: 'points',
                        templateUrl: 'app/points/point.component.html',
                        providers: [point_service_1.PointService, achievement_service_1.AchievementService, booster_service_1.BoosterService]
                    }), 
                    __metadata('design:paramtypes', [point_service_1.PointService])
                ], PointComponent);
                return PointComponent;
            }());
            exports_1("PointComponent", PointComponent);
        }
    }
});
//# sourceMappingURL=point.component.js.map