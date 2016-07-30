System.register(["angular2/core", "./booster", "./booster.service"], function(exports_1, context_1) {
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
    var core_1, booster_1, booster_service_1;
    var BoosterDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (booster_1_1) {
                booster_1 = booster_1_1;
            },
            function (booster_service_1_1) {
                booster_service_1 = booster_service_1_1;
            }],
        execute: function() {
            BoosterDetailComponent = (function () {
                function BoosterDetailComponent(_boosterService) {
                    this._boosterService = _boosterService;
                }
                BoosterDetailComponent.prototype.payForBooster = function () {
                    this._boosterService.buyBooster(this.booster);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', booster_1.Booster)
                ], BoosterDetailComponent.prototype, "booster", void 0);
                BoosterDetailComponent = __decorate([
                    core_1.Component({
                        selector: "booster-detail",
                        templateUrl: "app/booster/boosterdetail.component.html",
                        providers: [booster_service_1.BoosterService]
                    }), 
                    __metadata('design:paramtypes', [booster_service_1.BoosterService])
                ], BoosterDetailComponent);
                return BoosterDetailComponent;
            }());
            exports_1("BoosterDetailComponent", BoosterDetailComponent);
        }
    }
});
//# sourceMappingURL=boosterdetail.component.js.map