import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {QuizStatus} from "../quiz-game/quizStatus";
import {FooterComponent} from "../footer/footer.component";
import {QuizGameComponent} from "../quiz-game/quizGame.component";

@Component({
    directives: [ROUTER_DIRECTIVES, FooterComponent],
    selector: "end",
    templateUrl: "app/end/end.component.html"
})
export class EndComponent implements OnInit {
    public status: QuizStatus;

    public ngOnInit() {
        this.status = QuizGameComponent.lastStatus;
    }
}
