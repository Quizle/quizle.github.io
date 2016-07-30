import {Component, OnInit} from "angular2/core";
import {QuizDetailComponent} from "./quiz-detail/quizDetail.component";
import {QuizTheme} from "./quizTheme";
import {RouteParams, Router} from "angular2/router";
import {QuizThemeService} from "./quizTheme.service";
import {QuizStatus} from "./quizStatus";
import {AchievementEventService} from "../achievement/events/achievementEvent.service";
import {AnswerStatus} from "./answerStatus";
import {AchievementService} from "../achievement/achievement.service";
import {CompletedGamesHandler} from "../achievement/events/handlers/completedGamesHandler";
import {ProfileService} from "../achievement/profile/profile.service";
import {ComboHandler} from "../achievement/events/handlers/comboHandler";
import {AnswerAmountHandler} from "../achievement/events/handlers/answerAmountHandler";
import {MasterThemeHandler} from "../achievement/events/handlers/masterThemeHandler";
import {MultiAchievementHandler} from "../achievement/events/handlers/mutliAchievementHandler";
import {ScoreHandler} from "../achievement/events/handlers/scoreHandler";
import {SecretHandler} from "../achievement/events/handlers/secretHandler";

@Component({
    directives: [QuizDetailComponent],
    providers: [QuizThemeService, AchievementEventService, AchievementService, CompletedGamesHandler, ComboHandler, AnswerAmountHandler, MasterThemeHandler, MultiAchievementHandler, ScoreHandler, SecretHandler, ProfileService],
    selector: "quiz-game",
    templateUrl: "app/quiz-game/quizGame.component.html"
})
export class QuizGameComponent implements OnInit {
    public static lastStatus: QuizStatus;
    public theme: QuizTheme;
    public total: number = 10;

    constructor(private _router: Router, private _routeParams: RouteParams, private _themeService: QuizThemeService, private _eventService: AchievementEventService) {
    }

    public ngOnInit() {
        this.theme = this._themeService.findOne(this._routeParams.get("theme"));
    }

    public completed(status: QuizStatus) {
        QuizGameComponent.lastStatus = status;
        this._eventService.completedEvents.emit(status);
        this._router.navigate(["End"]);
    }

    public answered(status: AnswerStatus) {
        this._eventService.answeredEvents.emit(status);
    }
}