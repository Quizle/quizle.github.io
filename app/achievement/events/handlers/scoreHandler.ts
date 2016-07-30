import {Injectable} from "angular2/core";
import {ProfileHandler} from "./profileHandler";
import {AchievementService} from "../../achievement.service";
import {Profile} from "../../profile/profile";
import {Achievement} from "./Achievement";
import {AnswerStatus} from "../../../quiz-game/answerStatus";
import {QuizStatus} from "../../../quiz-game/quizStatus";
import {QuizThemeKind} from "../../../quiz-game/quizThemeKind";
@Injectable()
export class ScoreHandler extends ProfileHandler {

    public constructor(private _service: AchievementService) {
        super();
    }

    public getAchieved(profile:Profile, gainedAchievements: Achievement[], answer: AnswerStatus, completed: QuizStatus): Achievement[] {
        let achievements: Achievement[] = [];
        if (completed != null) {
            if (completed.correct == 0 && !this.hasAchievement(gainedAchievements, "zeroScore")) {
                achievements.push(this._service.getAchievementByKey("zeroScore"));
            }
            if (completed.correct == 1 && !this.hasAchievement(gainedAchievements, "oneScore")) {
                achievements.push(this._service.getAchievementByKey("oneScore"));
            }
            if (completed.correct < 5 && completed.theme.kind == QuizThemeKind.KIDS && !this.hasAchievement(gainedAchievements, "kindergarten")) {
                achievements.push(this._service.getAchievementByKey("kindergarten"));
            }
        }
        if (profile.wrong >= 20 && !this.hasAchievement(gainedAchievements, "loser")) {
            achievements.push(this._service.getAchievementByKey("loser"));
        }
        if (answer != null) {
            if (answer.correct && !this.hasAchievement(gainedAchievements, "newbie")) {
                achievements.push(this._service.getAchievementByKey("newbie"));
            }
            if (!answer.correct && !this.hasAchievement(gainedAchievements, "fail")) {
                achievements.push(this._service.getAchievementByKey("fail"));
            }
        }
        return achievements;
    }
}