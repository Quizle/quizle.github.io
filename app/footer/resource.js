System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Resource;
    return {
        setters:[],
        execute: function() {
            Resource = (function () {
                function Resource(link, name) {
                    this.link = link;
                    this.name = name;
                }
                return Resource;
            }());
            exports_1("Resource", Resource);
        }
    }
});
//# sourceMappingURL=resource.js.map