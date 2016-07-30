import {Component, Input} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {AchievementComponent} from "../achievement/achievement.component";
import {QuizTeamComponent} from "../quiz-team/quizTeam.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
    directives: [ROUTER_DIRECTIVES, AchievementComponent, QuizTeamComponent, FooterComponent],
    selector: "quiz-home",
    templateUrl: "app/home/home.component.html",
})
export class HomeComponent {
    @Input() achievement;

    constructor(){}
}
