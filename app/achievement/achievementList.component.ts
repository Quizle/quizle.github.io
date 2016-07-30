import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {AchievementService} from "./achievement.service";
import {Http} from "angular2/http";
import "rxjs/add/operator/map";

@Component({
  directives: [ROUTER_DIRECTIVES],
    providers: [AchievementService],
    selector: "achievement-list",
    styles: [`
        .item {
            opacity: .5;
        }

        .item img {
            opacity: .2;
        }

        .gained.item, .gained.item img {
            opacity: 1;
        }
    `],
    templateUrl: "app/achievement/achievementList.component.html"
})
export class AchievementListComponent implements OnInit {
    public achievements: any[];

    public constructor(private _service: AchievementService, private _http: Http) {

    }

    public ngOnInit() {
        // You can clearly see we're getting tired here, f*ck quality ^^
        let gained = this._service.getAchievementsFromLocalStorage();
        this._http.get("app/json/achievements/achievements.json")
            .map(res => res.json())
            .subscribe((achievements) => this.achievements = achievements
                .map(achievement => {
                    achievement.gained = gained.some(gainedAchievement => achievement.key === gainedAchievement.key);
                    return achievement;
                }));
    }
}
