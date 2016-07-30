import {Component, OnInit} from "angular2/core";
import {AchievementEventService} from "./events/achievementEvent.service";
import {ToastsManager} from "ng2-toastr/ng2-toastr";

@Component({
    providers: [ToastsManager],
    selector: "quiz-achievement-notifier",
    template: "<div></div>"
})
export class AchievementNotifierComponent implements OnInit {
    public constructor(private _toastr: ToastsManager) {
    }

    public ngOnInit() {
        AchievementEventService.achievementEvents.subscribe(achievement => {
            setTimeout(() => {
                this._toastr.info(`${achievement.name} (+${achievement.points})`, achievement.description);
            }, 500);
        });
    }
}