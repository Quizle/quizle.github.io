System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AnswerStatus;
    return {
        setters:[],
        execute: function() {
            AnswerStatus = (function () {
                function AnswerStatus(correct, theme) {
                    this.correct = correct;
                    this.theme = theme;
                }
                return AnswerStatus;
            }());
            exports_1("AnswerStatus", AnswerStatus);
        }
    }
});
//# sourceMappingURL=answerStatus.js.map