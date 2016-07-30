import {AchievementEventService} from "../../achievement/events/achievementEvent.service";
import {Component} from "angular2/core";
import {Secret} from "./secret";

@Component({
    host: {
        "(document:keydown)": "_keydown($event)"
    },
    selector: "quiz-secret",
    template: "<div></div>"
})
export class QuizSecretComponent {
    private _secrets: Secret[] = [
        new Secret("konami", ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "KeyB", "KeyA"]),
        new Secret("dimitri", ["KeyD", "KeyI", "KeyM", "KeyI", "KeyT", "KeyR", "KeyI"]),
        new Secret("sam", ["KeyS", "KeyA", "KeyM"]),
        new Secret("verena", ["KeyV", "KeyE", "KeyR", "KeyE", "KeyN", "KeyA"])];
    
    public constructor(private _eventService: AchievementEventService) {
        
    }
    
    private _keydown($event) {
        this._secrets.forEach(secret => {
            let current = secret.keys[secret.current];
            let code = `Key${String.fromCharCode($event.keyCode)}`;
            if ($event.code === current || code === current) {
                secret.current += 1;
                if (secret.current === secret.keys.length) {
                    this._eventService.secretEvents.emit(secret.name);
                }
            } else {
                secret.current = 0;
            }
        });
    }
}