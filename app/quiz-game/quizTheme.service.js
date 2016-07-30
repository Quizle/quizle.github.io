System.register(["./quizTheme", "./quizThemeKind"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var quizTheme_1, quizThemeKind_1;
    var QuizThemeService;
    return {
        setters:[
            function (quizTheme_1_1) {
                quizTheme_1 = quizTheme_1_1;
            },
            function (quizThemeKind_1_1) {
                quizThemeKind_1 = quizThemeKind_1_1;
            }],
        execute: function() {
            QuizThemeService = (function () {
                function QuizThemeService() {
                    this._themes = new Map()
                        .set("animals", new quizTheme_1.QuizTheme(quizThemeKind_1.QuizThemeKind.ANIMALS, "Animals", "animals", "violet", "olive"))
                        .set("brain-teasers", new quizTheme_1.QuizTheme(quizThemeKind_1.QuizThemeKind.BRAIN_TEASERS, "Brain teasers", "brain-teasers", "pink", "green"))
                        .set("general", new quizTheme_1.QuizTheme(quizThemeKind_1.QuizThemeKind.GENERAL, "General", "general", "teal", "red"))
                        .set("entertainment", new quizTheme_1.QuizTheme(quizThemeKind_1.QuizThemeKind.ENTERTAINMENT, "Entertainment", "entertainment", "yellow", "blue"))
                        .set("kids", new quizTheme_1.QuizTheme(quizThemeKind_1.QuizThemeKind.KIDS, "For kids", "kids", "blue", "yellow"))
                        .set("literature", new quizTheme_1.QuizTheme(quizThemeKind_1.QuizThemeKind.LITERATURE, "Literature", "literature", "purple", "orange"))
                        .set("movies", new quizTheme_1.QuizTheme(quizThemeKind_1.QuizThemeKind.MOVIES, "Movies", "movies", "olive", "violet"))
                        .set("science", new quizTheme_1.QuizTheme(quizThemeKind_1.QuizThemeKind.SCIENCE, "Science and technology", "science", "red", "teal"))
                        .set("sports", new quizTheme_1.QuizTheme(quizThemeKind_1.QuizThemeKind.SPORTS, "Sports", "sports", "green", "pink"))
                        .set("videogames", new quizTheme_1.QuizTheme(quizThemeKind_1.QuizThemeKind.VIDEOGAMES, "Videogames", "videogames", "orange", "purple"));
                }
                QuizThemeService.prototype.findOne = function (theme) {
                    return this._themes.get(theme);
                };
                QuizThemeService.prototype.findAll = function () {
                    return Array.from(this._themes.values());
                };
                return QuizThemeService;
            }());
            exports_1("QuizThemeService", QuizThemeService);
        }
    }
});
//# sourceMappingURL=quizTheme.service.js.map