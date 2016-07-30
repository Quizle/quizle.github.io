/**
 * Created by sambaeck on 15/05/16.
 */
import {Component, Input} from "angular2/core";
import {Booster} from "./booster";
import {BoosterService} from "./booster.service";
@Component({
    selector: "booster-detail",
    templateUrl : "app/booster/boosterdetail.component.html",
    providers: [BoosterService]
})
export class BoosterDetailComponent{
    @Input() booster: Booster;

    constructor(private _boosterService:BoosterService){

    }

    payForBooster(){
        this._boosterService.buyBooster(this.booster);
    }
}
