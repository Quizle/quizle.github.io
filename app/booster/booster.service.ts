import {Booster} from "./booster";
import {Http} from "angular2/http";
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {PointService} from "../points/point.service";
import {ToastsManager} from "ng2-toastr/ng2-toastr";
import {QuizDetailComponent} from "../quiz-game/quiz-detail/quizDetail.component";

@Injectable()
export class BoosterService {
    _boosters:Observable<Booster[]>;
    private _boostersUrl = "app/json/boosters/boosters.json";

    constructor(private _http:Http, private _pointService: PointService, private _toastr : ToastsManager) {
        this._boosters = _http.get(this._boostersUrl).map(res => res.json());
    }

    public listen() {
        QuizDetailComponent.removeSuccess.subscribe(booster => this._pointService.onBoosterBought(booster));
        QuizDetailComponent.increaseTimeSuccess.subscribe(booster => this._pointService.onBoosterBought(booster));
    }

    public getAllBoosters(){
        return this._boosters;
    }

    public buyBooster(booster: Booster){
        if (this._pointService.isBuyable(booster)) {
            if (booster.name === "increaseTime") {
                QuizDetailComponent.increaseTime.emit(booster);
            } else if (booster.name === "deleteWrongAnswer") {
                QuizDetailComponent.remove.emit(booster);
            }
        } else {
            this._toastr.error("Play more to obtain more coins.","Not enough gold!");
        }
    }
}
