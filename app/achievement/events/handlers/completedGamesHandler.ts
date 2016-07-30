import {ProfileHandler} from "./profileHandler";
import {Profile} from "../../profile/profile";
import {Achievement} from "./Achievement";
import {Injectable} from "angular2/core";
import {AchievementService} from "../../achievement.service";

@Injectable()
export class CompletedGamesHandler extends ProfileHandler {
    
    public constructor(private _service: AchievementService) {
        super();
    }

    public getAchieved(profile:Profile, gainedAchievements: Achievement[]): Achievement[] {
        let achievements: Achievement[] = [];
        if (profile.completedGames >= 1 && !this.hasAchievement(gainedAchievements, "firstGame")) {
            achievements.push(this._service.getAchievementByKey("firstGame"));
        }
        if (profile.completedGames >= 20 && !this.hasAchievement(gainedAchievements, "twentyGames")) {
            achievements.push(this._service.getAchievementByKey("twentyGames"));
        }
        if (profile.completedGames >= 50 && !this.hasAchievement(gainedAchievements, "fiftyGames")) {
            achievements.push(this._service.getAchievementByKey("fiftyGames"));
        }
        return achievements;
    }
}