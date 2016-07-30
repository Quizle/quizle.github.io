import {Component} from "angular2/core";
import {TeamMember} from "./teamMember";
@Component({
    selector: "quiz-team",
    templateUrl: "app/quiz-team/quizTeam.component.html"
})
export class QuizTeamComponent {
    public team: TeamMember[] = [
        new TeamMember("Sam Baeck", "sam", "zoompiex", "sambaeck", "Developer", "https://avatars2.githubusercontent.com/u/10757920?v=3&s=460"),
        new TeamMember("Dimitri Mestdagh", "dimitri", "g00glen00b", "g00glen00b", "IT Enthusiast | Blogs about web development", "https://avatars0.githubusercontent.com/u/4865705?v=3&s=460"),
        new TeamMember("Verena Vertonghen", "verena", "V__Verena", "verenavertonghen", "Front-End Designer/Developer | Creative", "https://avatars1.githubusercontent.com/u/8791606?v=3&s=460")
    ];
}
