export class TeamMember {
    public fullname: string;
    public name: string;
    public twitter: string;
    public github: string;
    public occupation: string;
    public picture: string;


    constructor(fullname:string, name:string, twitter:string, github: string, occupation:string, picture:string) {
        this.fullname = fullname;
        this.name = name;
        this.twitter = twitter;
        this.github = github;
        this.occupation = occupation;
        this.picture = picture;
    }
}
