import {Injectable, Output, EventEmitter} from "angular2/core";
import {Booster} from "../booster/booster";
import {ProfileService} from "../achievement/profile/profile.service";

@Injectable()
export class PointService {
    @Output public static totalPoints:EventEmitter<number> = new EventEmitter<number>();


    constructor(private _profileService: ProfileService) {
    }


    getTotalPoints() {
        let points = this._profileService.getProfile().points;
         return points == null ? 0 : points;
    }

    public isBuyable(booster:Booster) {
        return this._profileService.getProfile().points - booster.cost >= 0;
    }


    public onBoosterBought(booster:Booster) {
        console.log(booster);
        let profile = this._profileService.getProfile();
        profile.points -= booster.cost;
        this._profileService.saveProfile(profile);
        PointService.totalPoints.emit(profile.points);
    }


}
