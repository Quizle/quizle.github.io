import {Component, Input, Output, EventEmitter, OnChanges} from "angular2/core";
import {QuizTimer} from "./quizTimer";
@Component({
    selector: 'quiz-timer',
    styles: [`
        .bar {
            transition-duration: 300ms;
            min-width: 0 !important;
        }
        
        .bar > .progress {
            right: -2em;
            color: #222222;
        }
    `],
    templateUrl: 'app/shared/quiz-timer/quizTimer.component.html'
})
export class QuizTimerComponent implements OnChanges {
    @Input() public timer: QuizTimer;
    @Output("timeup") public timeup: EventEmitter<QuizTimer> = new EventEmitter<QuizTimer>(false);
    private interval;

    public ngOnChanges() {
        if (this.interval != null) {
            clearInterval(this.interval);
        }
        if (this.timer != null) {
            let time = new Date().getTime();
            this.interval = setInterval(() => {
                let currentTime = new Date().getTime();
                this.timer.current = this.timer.max + this.timer.bonus - ((currentTime - time) / 1000);
                if (this.timer.current <= 0) {
                    this.timer.current = 0;
                    clearInterval(this.interval);
                    this.timeup.emit(this.timer);
                }
            }, 100);
        }
    }

    public getSeconds(timer: QuizTimer): string {
        if (timer != null) {
            return `${Math.round(timer.current)}s`;
        } else {
            return "?s";
        }
    }

    public getPercentage(timer: QuizTimer):string {
        if (timer != null) {
            return `${(timer.current / timer.max) * 100}%`;
        } else {
            return "100%";
        }
    }
}
