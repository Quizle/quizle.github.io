System.register(["../../achievement/events/achievementEvent.service", "angular2/core", "./secret"], function(exports_1, context_1) {
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
    var achievementEvent_service_1, core_1, secret_1;
    var QuizSecretComponent;
    return {
        setters:[
            function (achievementEvent_service_1_1) {
                achievementEvent_service_1 = achievementEvent_service_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (secret_1_1) {
                secret_1 = secret_1_1;
            }],
        execute: function() {
            QuizSecretComponent = (function () {
                function QuizSecretComponent(_eventService) {
                    this._eventService = _eventService;
                    this._secrets = [
                        new secret_1.Secret("konami", ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"]),
                        new secret_1.Secret("dimitri", ["KeyD", "KeyI", "KeyM", "KeyI", "KeyT", "KeyR", "KeyI"]),
                        new secret_1.Secret("sam", ["KeyS", "KeyA", "KeyM"]),
                        new secret_1.Secret("verena", ["KeyV", "KeyE", "KeyR", "KeyE", "KeyN", "KeyA"])];
                }
                QuizSecretComponent.prototype._keydown = function ($event) {
                    var _this = this;
                    this._secrets.forEach(function (secret) {
                        var current = secret.keys[secret.current];
                        var code = "Key" + String.fromCharCode($event.keyCode);
                        if ($event.code === current || code === current) {
                            secret.current += 1;
                            if (secret.current === secret.keys.length) {
                                _this._eventService.secretEvents.emit(secret.name);
                            }
                        }
                        else {
                            secret.current = 0;
                        }
                    });
                };
                QuizSecretComponent = __decorate([
                    core_1.Component({
                        host: {
                            "(document:keydown)": "_keydown($event)"
                        },
                        selector: "quiz-secret",
                        template: "<div></div>"
                    }), 
                    __metadata('design:paramtypes', [achievementEvent_service_1.AchievementEventService])
                ], QuizSecretComponent);
                return QuizSecretComponent;
            }());
            exports_1("QuizSecretComponent", QuizSecretComponent);
        }
    }
});
//# sourceMappingURL=quizSecret.component.js.map