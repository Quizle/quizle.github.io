System.register(["angular2/core", "../quiz-game/quizTheme.service", "../footer/footer.component", "angular2/router"], function(exports_1, context_1) {
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
    var core_1, quizTheme_service_1, footer_component_1, router_1;
    var QuizChooserComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (quizTheme_service_1_1) {
                quizTheme_service_1 = quizTheme_service_1_1;
            },
            function (footer_component_1_1) {
                footer_component_1 = footer_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            QuizChooserComponent = (function () {
                function QuizChooserComponent(_themeService) {
                    this._themeService = _themeService;
                }
                QuizChooserComponent.prototype.ngOnInit = function () {
                    this.themes = this._themeService.findAll();
                };
                QuizChooserComponent = __decorate([
                    core_1.Component({
                        directives: [router_1.ROUTER_DIRECTIVES, footer_component_1.FooterComponent],
                        providers: [quizTheme_service_1.QuizThemeService],
                        selector: "quiz-chooser",
                        templateUrl: "app/quiz-chooser/quizChooser.component.html"
                    }), 
                    __metadata('design:paramtypes', [quizTheme_service_1.QuizThemeService])
                ], QuizChooserComponent);
                return QuizChooserComponent;
            }());
            exports_1("QuizChooserComponent", QuizChooserComponent);
        }
    }
});
//# sourceMappingURL=quizChooser.component.js.map