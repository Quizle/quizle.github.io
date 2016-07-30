/**
 * Created by sambaeck on 14/05/16.
 */
import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {AchievementService} from "./achievement.service";
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    directives: [ROUTER_DIRECTIVES],
    selector: "achievements",
    styles: [`
        .center {
            text-align: center;
        }
    `],
    templateUrl: "app/achievement/achievement.component.html",
    providers: [AchievementService, HTTP_PROVIDERS],
})

export class AchievementComponent{
    private _achievements: Array<any>;

    constructor(private _achievementService:AchievementService){
        // this._achievements = _achievementService.getAllAchievements().subscribe(data => this._achievements = data);
    }

    getAchievementByName(){
        console.log(this._achievementService.getAchievementByKey('firstGame'));
    }

    ngOnInit(){
        this._achievements = this._achievementService.getAchievementsFromLocalStorage();
    }

}
