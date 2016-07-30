import {ProfileHandler} from "./profileHandler";
import {Injectable} from "angular2/core";
import {AchievementService} from "../../achievement.service";
import {Profile} from "../../profile/profile";
import {Achievement} from "./Achievement";

@Injectable()
export class AnswerAmountHandler extends ProfileHandler {
    public constructor(private _service: AchievementService) {
        super();
    }

    getAchieved(profile:Profile, gainedAchievements:Achievement[]):Achievement[] {
        return profile.themeProfiles
            .filter(subProfile => {
                let key = `${subProfile.theme.name}100Questions`;
                return subProfile.correct >= 100 && !this.hasAchievement(gainedAchievements, key);
            }).map(subProfile => {
                let key = `${subProfile.theme.name}100Questions`;
                return this._service.getAchievementByKey(key);
            });
    }
}