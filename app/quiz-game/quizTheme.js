System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QuizTheme;
    return {
        setters:[],
        execute: function() {
            QuizTheme = (function () {
                function QuizTheme(kind, name, code, color, complementaryColor) {
                    this.kind = kind;
                    this.name = name;
                    this.code = code;
                    this.color = color;
                    this.complementaryColor = complementaryColor;
                }
                return QuizTheme;
            }());
            exports_1("QuizTheme", QuizTheme);
        }
    }
});
//# sourceMappingURL=quizTheme.js.map