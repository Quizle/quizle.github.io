System.register(["angular2/core", "./quizTimer"], function(exports_1, context_1) {
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
    var core_1, quizTimer_1;
    var QuizTimerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (quizTimer_1_1) {
                quizTimer_1 = quizTimer_1_1;
            }],
        execute: function() {
            QuizTimerComponent = (function () {
                function QuizTimerComponent() {
                    this.timeup = new core_1.EventEmitter(false);
                }
                QuizTimerComponent.prototype.ngOnChanges = function () {
                    var _this = this;
                    if (this.interval != null) {
                        clearInterval(this.interval);
                    }
                    if (this.timer != null) {
                        var time_1 = new Date().getTime();
                        this.interval = setInterval(function () {
                            var currentTime = new Date().getTime();
                            _this.timer.current = _this.timer.max + _this.timer.bonus - ((currentTime - time_1) / 1000);
                            if (_this.timer.current <= 0) {
                                _this.timer.current = 0;
                                clearInterval(_this.interval);
                                _this.timeup.emit(_this.timer);
                            }
                        }, 100);
                    }
                };
                QuizTimerComponent.prototype.getSeconds = function (timer) {
                    if (timer != null) {
                        return Math.round(timer.current) + "s";
                    }
                    else {
                        return "?s";
                    }
                };
                QuizTimerComponent.prototype.getPercentage = function (timer) {
                    if (timer != null) {
                        return (timer.current / timer.max) * 100 + "%";
                    }
                    else {
                        return "100%";
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', quizTimer_1.QuizTimer)
                ], QuizTimerComponent.prototype, "timer", void 0);
                __decorate([
                    core_1.Output("timeup"), 
                    __metadata('design:type', core_1.EventEmitter)
                ], QuizTimerComponent.prototype, "timeup", void 0);
                QuizTimerComponent = __decorate([
                    core_1.Component({
                        selector: 'quiz-timer',
                        styles: ["\n        .bar {\n            transition-duration: 300ms;\n            min-width: 0 !important;\n        }\n        \n        .bar > .progress {\n            right: -2em;\n            color: #222222;\n        }\n    "],
                        templateUrl: 'app/shared/quiz-timer/quizTimer.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], QuizTimerComponent);
                return QuizTimerComponent;
            }());
            exports_1("QuizTimerComponent", QuizTimerComponent);
        }
    }
});
//# sourceMappingURL=quizTimer.component.js.map