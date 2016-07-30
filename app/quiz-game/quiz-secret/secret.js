System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Secret;
    return {
        setters:[],
        execute: function() {
            Secret = (function () {
                function Secret(name, keys) {
                    this.current = 0;
                    this.keys = keys;
                    this.name = name;
                }
                return Secret;
            }());
            exports_1("Secret", Secret);
        }
    }
});
//# sourceMappingURL=secret.js.map