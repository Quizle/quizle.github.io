/**
 * Created by sambaeck on 15/05/16.
 */
import {Component} from "angular2/core";
import {Booster} from "./booster";
import {BoosterService} from "./booster.service";
import {BoosterDetailComponent} from "./boosterdetail.component";
import {PointService} from "../points/point.service";

@Component({
    directives: [BoosterDetailComponent],
    selector: "boosters",
    templateUrl : "app/booster/booster.component.html",
    providers: [BoosterService, PointService]
})

export class BoosterComponent{
    _boosters : Booster[] = [];

    constructor(private _boosterService:BoosterService){
        this._boosterService.listen();
        this._boosterService.getAllBoosters().subscribe(data => this._boosters = data);
    }
}
