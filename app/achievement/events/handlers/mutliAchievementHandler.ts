import {Injectable} from "angular2/core";
import {ProfileHandler} from "./profileHandler";
import {Achievement} from "./Achievement";
import {Profile} from "../../profile/profile";
import {AchievementService} from "../../achievement.service";
import {QuizThemeService} from "../../../quiz-game/quizTheme.service";

@Injectable()
export class MultiAchievementHandler extends ProfileHandler {

    public constructor(private _service: AchievementService, private _themeService: QuizThemeService) {
        super();
    }

    public getAchieved(profile:Profile, gainedAchievements: Achievement[]): Achievement[] {
        let achievements: Achievement[] = [];
        let geek = this.hasAchievement(gainedAchievements, "moviesMaster") &&
            this.hasAchievement(gainedAchievements, "moviesMaster") &&
            this.hasAchievement(gainedAchievements, "moviesMaster") &&
            this.hasAchievement(gainedAchievements, "moviesMaster");
        let beater = this._themeService.findAll().filter(theme => !this.hasAchievement(gainedAchievements, `${theme.code}Master`));
        if (geek && !this.hasAchievement(gainedAchievements, "geek")) {
            achievements.push(this._service.getAchievementByKey("geek"));
        }
        if (beater.length == 0 && !this.hasAchievement(gainedAchievements, "beater")) {
            achievements.push(this._service.getAchievementByKey("beater"));
        }
        return achievements;
    }
}