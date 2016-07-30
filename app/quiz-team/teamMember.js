System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TeamMember;
    return {
        setters:[],
        execute: function() {
            TeamMember = (function () {
                function TeamMember(fullname, name, twitter, github, occupation, picture) {
                    this.fullname = fullname;
                    this.name = name;
                    this.twitter = twitter;
                    this.github = github;
                    this.occupation = occupation;
                    this.picture = picture;
                }
                return TeamMember;
            }());
            exports_1("TeamMember", TeamMember);
        }
    }
});
//# sourceMappingURL=teamMember.js.map