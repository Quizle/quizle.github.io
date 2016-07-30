System.register(["angular2/core", "./teamMember"], function(exports_1, context_1) {
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
    var core_1, teamMember_1;
    var QuizTeamComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (teamMember_1_1) {
                teamMember_1 = teamMember_1_1;
            }],
        execute: function() {
            QuizTeamComponent = (function () {
                function QuizTeamComponent() {
                    this.team = [
                        new teamMember_1.TeamMember("Sam Baeck", "sam", "zoompiex", "sambaeck", "Developer", "https://avatars2.githubusercontent.com/u/10757920?v=3&s=460"),
                        new teamMember_1.TeamMember("Dimitri Mestdagh", "dimitri", "g00glen00b", "g00glen00b", "IT Enthusiast | Blogs about web development", "https://avatars0.githubusercontent.com/u/4865705?v=3&s=460"),
                        new teamMember_1.TeamMember("Verena Vertonghen", "verena", "V__Verena", "verenavertonghen", "Front-End Designer/Developer | Creative", "https://avatars1.githubusercontent.com/u/8791606?v=3&s=460")
                    ];
                }
                QuizTeamComponent = __decorate([
                    core_1.Component({
                        selector: "quiz-team",
                        templateUrl: "app/quiz-team/quizTeam.component.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], QuizTeamComponent);
                return QuizTeamComponent;
            }());
            exports_1("QuizTeamComponent", QuizTeamComponent);
        }
    }
});
//# sourceMappingURL=quizTeam.component.js.map