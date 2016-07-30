System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QuizStatus;
    return {
        setters:[],
        execute: function() {
            QuizStatus = (function () {
                function QuizStatus(total, theme, correct, wrong) {
                    if (total === void 0) { total = 0; }
                    if (correct === void 0) { correct = 0; }
                    if (wrong === void 0) { wrong = 0; }
                    this.total = total;
                    this.theme = theme;
                    this.correct = correct;
                    this.wrong = wrong;
                }
                return QuizStatus;
            }());
            exports_1("QuizStatus", QuizStatus);
        }
    }
});
//# sourceMappingURL=quizStatus.js.map