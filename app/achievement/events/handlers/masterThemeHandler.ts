import {Injectable} from "angular2/core";
import {ProfileHandler} from "./profileHandler";
import {AchievementService} from "../../achievement.service";
import {Profile} from "../../profile/profile";
import {Achievement} from "./Achievement";
import {AnswerStatus} from "../../../quiz-game/answerStatus";
import {QuizStatus} from "../../../quiz-game/quizStatus";

@Injectable()
export class MasterThemeHandler extends ProfileHandler {

    public constructor(private _service: AchievementService) {
        super();
    }

    public getAchieved(profile:Profile, gainedAchievements: Achievement[], answer: AnswerStatus, quiz: QuizStatus): Achievement[] {
        let achievements: Achievement[] = [];
        if (quiz != null) {
            let key = `${quiz.theme.code}Master`;
            if (quiz.correct >= 8 && !this.hasAchievement(gainedAchievements, key)) {
                achievements.push(this._service.getAchievementByKey(key));
            }
        }
        return achievements;
    }
}