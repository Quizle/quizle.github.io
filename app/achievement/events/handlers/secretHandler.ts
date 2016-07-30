import {ProfileHandler} from "./profileHandler";
import {Injectable} from "angular2/core";
import {Profile} from "../../profile/profile";
import {Achievement} from "./Achievement";
import {AnswerStatus} from "../../../quiz-game/answerStatus";
import {QuizStatus} from "../../../quiz-game/quizStatus";
import {AchievementService} from "../../achievement.service";

@Injectable()
export class SecretHandler extends ProfileHandler {

    public constructor(private _service: AchievementService) {
        super();
    }

    getAchieved(profile:Profile, gainedAchievements:Achievement[], answer?:AnswerStatus, completed?:QuizStatus, secret?:string):Achievement[] {
        let achievements = [];
        if (secret != null && !this.hasAchievement(gainedAchievements, secret)) {
            achievements.push(this._service.getAchievementByKey(secret));
        }
        return achievements;
    }

}