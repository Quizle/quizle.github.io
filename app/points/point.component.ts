/**
 * Created by sambaeck on 15/05/16.
 */
import {Component, OnInit} from "angular2/core";
import {PointService} from "./point.service";
import {AchievementService} from "../achievement/achievement.service";
import {BoosterService} from "../booster/booster.service";
import {AchievementEventService} from "../achievement/events/achievementEvent.service";
@Component({
    selector: 'points',
    templateUrl : 'app/points/point.component.html',
    providers: [PointService, AchievementService, BoosterService]
})
export class PointComponent implements OnInit {
    _amountOfPoints : number;

    constructor(private _pointService:PointService){
    }

    ngOnInit(){
        this._amountOfPoints = this._pointService.getTotalPoints();
        PointService.totalPoints.subscribe(points => this._amountOfPoints = points);
        AchievementEventService.achievementEvents.subscribe(() => this._amountOfPoints = this._pointService.getTotalPoints());
    }

}
