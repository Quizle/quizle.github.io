System.register(["./quizTheme"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var quizTheme_1;
    var QuizThemeService;
    return {
        setters:[
            function (quizTheme_1_1) {
                quizTheme_1 = quizTheme_1_1;
            }],
        execute: function() {
            QuizThemeService = (function () {
                function QuizThemeService() {
                    this._themes = new Map()
                        .set("animals", quizTheme_1.QuizTheme.ANIMALS)
                        .set("brain-teasers", quizTheme_1.QuizTheme.BRAIN_TEASERS)
                        .set("celebrities", quizTheme_1.QuizTheme.CELEBRITIES)
                        .set("entertainment", quizTheme_1.QuizTheme.ENTERTAINMENT)
                        .set("general", quizTheme_1.QuizTheme.GENERAL)
                        .set("geography", quizTheme_1.QuizTheme.GEOGRAPHY)
                        .set("history", quizTheme_1.QuizTheme.HISTORY)
                        .set("hobbies", quizTheme_1.QuizTheme.HOBBIES)
                        .set("humanities", quizTheme_1.QuizTheme.HUMANITIES)
                        .set("kids", quizTheme_1.QuizTheme.KIDS)
                        .set("literature", quizTheme_1.QuizTheme.LITERATURE)
                        .set("movies", quizTheme_1.QuizTheme.MOVIES)
                        .set("people", quizTheme_1.QuizTheme.PEOPLE)
                        .set("religion", quizTheme_1.QuizTheme.RELIGION)
                        .set("science", quizTheme_1.QuizTheme.SCIENCE)
                        .set("sports", quizTheme_1.QuizTheme.SPORTS)
                        .set("videogames", quizTheme_1.QuizTheme.VIDEOGAMES);
                }
                QuizThemeService.prototype.toString = function (theme) {
                    var themeString = null;
                    this._themes.forEach(function (value, key) {
                        if (value == theme) {
                            themeString = key;
                        }
                    });
                    return themeString;
                };
                QuizThemeService.prototype.toQuizTheme = function (theme) {
                    return this._themes.get(theme);
                };
                return QuizThemeService;
            }());
            exports_1("QuizThemeService", QuizThemeService);
        }
    }
});
//# sourceMappingURL=quizTheme.service.js.map