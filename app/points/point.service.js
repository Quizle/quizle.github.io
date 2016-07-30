System.register(["angular2/core", "../achievement/profile/profile.service"], function(exports_1, context_1) {
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
    var core_1, profile_service_1;
    var PointService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (profile_service_1_1) {
                profile_service_1 = profile_service_1_1;
            }],
        execute: function() {
            PointService = (function () {
                function PointService(_profileService) {
                    this._profileService = _profileService;
                }
                PointService.prototype.getTotalPoints = function () {
                    var points = this._profileService.getProfile().points;
                    return points == null ? 0 : points;
                };
                PointService.prototype.isBuyable = function (booster) {
                    return this._profileService.getProfile().points - booster.cost >= 0;
                };
                PointService.prototype.onBoosterBought = function (booster) {
                    console.log(booster);
                    var profile = this._profileService.getProfile();
                    profile.points -= booster.cost;
                    this._profileService.saveProfile(profile);
                    PointService.totalPoints.emit(profile.points);
                };
                PointService.totalPoints = new core_1.EventEmitter();
                __decorate([
                    core_1.Output, 
                    __metadata('design:type', core_1.EventEmitter)
                ], PointService, "totalPoints", void 0);
                PointService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [profile_service_1.ProfileService])
                ], PointService);
                return PointService;
            }());
            exports_1("PointService", PointService);
        }
    }
});
//# sourceMappingURL=point.service.js.map