System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ProfileHandler;
    return {
        setters:[],
        execute: function() {
            ProfileHandler = (function () {
                function ProfileHandler() {
                }
                ProfileHandler.prototype.hasAchievement = function (achievements, key) {
                    return achievements.some(function (achievement) { return achievement.key == key; });
                };
                return ProfileHandler;
            }());
            exports_1("ProfileHandler", ProfileHandler);
        }
    }
});
//# sourceMappingURL=profileHandler.js.map