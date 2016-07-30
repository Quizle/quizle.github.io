System.register(["angular2/http", "angular2/core", "../points/point.service", "ng2-toastr/ng2-toastr", "../quiz-game/quiz-detail/quizDetail.component"], function(exports_1, context_1) {
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
    var http_1, core_1, point_service_1, ng2_toastr_1, quizDetail_component_1;
    var BoosterService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (point_service_1_1) {
                point_service_1 = point_service_1_1;
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            },
            function (quizDetail_component_1_1) {
                quizDetail_component_1 = quizDetail_component_1_1;
            }],
        execute: function() {
            BoosterService = (function () {
                function BoosterService(_http, _pointService, _toastr) {
                    this._http = _http;
                    this._pointService = _pointService;
                    this._toastr = _toastr;
                    this._boostersUrl = "app/json/boosters/boosters.json";
                    this._boosters = _http.get(this._boostersUrl).map(function (res) { return res.json(); });
                }
                BoosterService.prototype.listen = function () {
                    var _this = this;
                    quizDetail_component_1.QuizDetailComponent.removeSuccess.subscribe(function (booster) { return _this._pointService.onBoosterBought(booster); });
                    quizDetail_component_1.QuizDetailComponent.increaseTimeSuccess.subscribe(function (booster) { return _this._pointService.onBoosterBought(booster); });
                };
                BoosterService.prototype.getAllBoosters = function () {
                    return this._boosters;
                };
                BoosterService.prototype.buyBooster = function (booster) {
                    if (this._pointService.isBuyable(booster)) {
                        if (booster.name === "increaseTime") {
                            quizDetail_component_1.QuizDetailComponent.increaseTime.emit(booster);
                        }
                        else if (booster.name === "deleteWrongAnswer") {
                            quizDetail_component_1.QuizDetailComponent.remove.emit(booster);
                        }
                    }
                    else {
                        this._toastr.error("Play more to obtain more coins.", "Not enough gold!");
                    }
                };
                BoosterService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, point_service_1.PointService, ng2_toastr_1.ToastsManager])
                ], BoosterService);
                return BoosterService;
            }());
            exports_1("BoosterService", BoosterService);
        }
    }
});
//# sourceMappingURL=booster.service.js.map