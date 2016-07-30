System.register(["angular2/core", "angular2/router", "rxjs/add/operator/map", "rxjs/add/operator/toPromise", "./home/home.component", "./end/end.component", "./quiz-game/quizGame.component", "./quiz-chooser/quizChooser.component", "./achievement/achievementNotifier.component", "./achievement/achievementList.component"], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, end_component_1, quizGame_component_1, quizChooser_component_1, achievementNotifier_component_1, achievementList_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (end_component_1_1) {
                end_component_1 = end_component_1_1;
            },
            function (quizGame_component_1_1) {
                quizGame_component_1 = quizGame_component_1_1;
            },
            function (quizChooser_component_1_1) {
                quizChooser_component_1 = quizChooser_component_1_1;
            },
            function (achievementNotifier_component_1_1) {
                achievementNotifier_component_1 = achievementNotifier_component_1_1;
            },
            function (achievementList_component_1_1) {
                achievementList_component_1 = achievementList_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: "my-app",
                        directives: [router_1.ROUTER_DIRECTIVES, achievementNotifier_component_1.AchievementNotifierComponent],
                        templateUrl: "/app/app.component.html"
                    }),
                    router_1.RouteConfig([{
                            path: "/quiz/:theme",
                            name: "QuizGame",
                            component: quizGame_component_1.QuizGameComponent
                        }, {
                            path: "/",
                            name: "Home",
                            component: home_component_1.HomeComponent
                        }, {
                            path: "/end",
                            name: "End",
                            component: end_component_1.EndComponent
                        }, {
                            path: "/achievements",
                            name: "Achievements",
                            component: achievementList_component_1.AchievementListComponent
                        }, {
                            path: "/choose",
                            name: "Choose",
                            component: quizChooser_component_1.QuizChooserComponent
                        }, {
                            path: "/*otherwise",
                            name: "Error",
                            redirectTo: ["Home"]
                        }]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map