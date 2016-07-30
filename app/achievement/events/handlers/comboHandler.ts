import {ProfileHandler} from "./profileHandler";
import {Profile} from "../../profile/profile";
import {Achievement} from "./Achievement";
import {Injectable} from "angular2/core";
import {AchievementService} from "../../achievement.service";

@Injectable()
export class ComboHandler extends ProfileHandler {
    public constructor(private _service: AchievementService) {
        super();
    }

    getAchieved(profile:Profile, gainedAchievements:Achievement[]):Achievement[] {
        let achievements: Achievement[] = [];
        if (profile.consecutively >= 10 && !this.hasAchievement(gainedAchievements, "tenConsecutivelyCorrectAnswers")) {
            achievements.push(this._service.getAchievementByKey("tenConsecutivelyCorrectAnswers"));
        }
        if (profile.consecutively >= 25 && !this.hasAchievement(gainedAchievements, "twentyfiveConsecutivelyCorrectAnswers")) {
            achievements.push(this._service.getAchievementByKey("twentyfiveConsecutivelyCorrectAnswers"));
        }
        if (profile.consecutively >= 50 && !this.hasAchievement(gainedAchievements, "fiftyConsecutivelyCorrectAnswers")) {
            achievements.push(this._service.getAchievementByKey("fiftyConsecutivelyCorrectAnswers"));
        }
        return achievements;
    }

}