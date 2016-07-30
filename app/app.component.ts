import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import {HomeComponent} from "./home/home.component";
import {EndComponent} from "./end/end.component";
import {QuizGameComponent} from "./quiz-game/quizGame.component";
import {QuizChooserComponent} from "./quiz-chooser/quizChooser.component";
import {AchievementNotifierComponent} from "./achievement/achievementNotifier.component";
import {AchievementListComponent} from "./achievement/achievementList.component";

@Component({
    selector: "my-app",
    directives: [ROUTER_DIRECTIVES, AchievementNotifierComponent],
    templateUrl: "/app/app.component.html"
})
@RouteConfig([{
    path: "/quiz/:theme",
    name: "QuizGame",
    component: QuizGameComponent
}, {
    path: "/",
    name: "Home",
    component: HomeComponent
}, {
    path: "/end",
    name: "End",
    component: EndComponent
}, {
    path: "/achievements",
    name: "Achievements",
    component: AchievementListComponent
}, {
    path: "/choose",
    name: "Choose",
    component: QuizChooserComponent
}, {
    path: "/*otherwise",
    name: "Error",
    redirectTo: ["Home"]
}])
export class AppComponent {
    constructor() {

    }
}
