System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var QuizTimer;
    return {
        setters:[],
        execute: function() {
            QuizTimer = (function () {
                function QuizTimer(current, max) {
                    this.current = current;
                    this.max = max;
                    this.bonus = 0;
                }
                return QuizTimer;
            }());
            exports_1("QuizTimer", QuizTimer);
        }
    }
});
//# sourceMappingURL=quizTimer.js.map