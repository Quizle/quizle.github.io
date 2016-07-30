System.register(["./themeProfile"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var themeProfile_1;
    var Profile;
    return {
        setters:[
            function (themeProfile_1_1) {
                themeProfile_1 = themeProfile_1_1;
            }],
        execute: function() {
            Profile = (function (_super) {
                __extends(Profile, _super);
                function Profile() {
                    _super.apply(this, arguments);
                }
                return Profile;
            }(themeProfile_1.ThemeProfile));
            exports_1("Profile", Profile);
        }
    }
});
//# sourceMappingURL=profile.js.map