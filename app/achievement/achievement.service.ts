import {Http} from "angular2/http";
import "rxjs/add/operator/map";
import {Injectable} from "angular2/core";

@Injectable()
export class AchievementService {
    private _achievementsUrl = "app/json/achievements/achievements.json";
    _achievements;

    constructor(private _http:Http) {
        _http.get(this._achievementsUrl).map(res => res.json()).subscribe(data => this._achievements = data);
    }

    public getAchievementByKey(key:string) {
        return this._achievements.find(achievement => achievement["key"] == key);
    }

    public pushAchievementToLocalStorage(achievement){
        let tmpAchievements = this.getAchievementsFromLocalStorage();
        if(tmpAchievements.indexOf(achievement) == -1){
            tmpAchievements.push(achievement);
            localStorage.setItem('achievements',JSON.stringify(tmpAchievements));
        }
    }

    public getAchievementsFromLocalStorage() {
        return JSON.parse(localStorage.getItem('achievements') || "[]");
    }
    
}
