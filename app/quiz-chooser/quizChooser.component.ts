import {Component, OnInit} from "angular2/core";
import {QuizThemeService} from "../quiz-game/quizTheme.service";
import {QuizTheme} from "../quiz-game/quizTheme";
import {FooterComponent} from "../footer/footer.component";
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from "angular2/router";

@Component({
    directives: [ROUTER_DIRECTIVES, FooterComponent],
    providers: [QuizThemeService],
    selector: "quiz-chooser",
    templateUrl: "app/quiz-chooser/quizChooser.component.html"
})
export class QuizChooserComponent implements OnInit {
    public themes: QuizTheme[];

    public constructor(private _themeService: QuizThemeService) {
    }

    public ngOnInit() {
        this.themes = this._themeService.findAll();
    }
}
