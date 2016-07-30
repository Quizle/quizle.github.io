import {Component, OnInit, Input, EventEmitter, Output} from "angular2/core";
import {QuizService} from "./quiz.service";
import {QuizTheme} from "../quizTheme";
import {Question} from "./question";
import {QuizTimer} from "../../shared/quiz-timer/quizTimer";
import {QuizTimerComponent} from "../../shared/quiz-timer/quizTimer.component";
import {ToastsManager} from "ng2-toastr/ng2-toastr";
import {HTTP_PROVIDERS} from "angular2/http";
import {QuizStatus} from "../quizStatus";
import {AnswerStatus} from "../answerStatus";
import {ROUTER_DIRECTIVES} from "angular2/router";
import {PointComponent} from "../../points/point.component";
import {BoosterComponent} from "../../booster/booster.component";
import {BoosterService} from "../../booster/booster.service";
import {Booster} from "../../booster/booster";
import {QuizSecretComponent} from "../quiz-secret/quizSecret.component";

@Component({
    directives: [QuizTimerComponent, PointComponent, ROUTER_DIRECTIVES, BoosterComponent, QuizSecretComponent],
    providers: [QuizService, ToastsManager, HTTP_PROVIDERS, BoosterService],
    selector: 'quiz-detail',
    styles: [`
        .answer {
            margin: 5px 0;
        }
        .ui.button.correct:disabled {
            opacity: 1 !important;
        }
    `],
    templateUrl: 'app/quiz-game/quiz-detail/quizDetail.component.html'
})
export class QuizDetailComponent implements OnInit {
    @Input() public theme: QuizTheme;
    @Input("questions") public totalQuestions: number;
    @Output("completed") public completed: EventEmitter<QuizStatus> = new EventEmitter<QuizStatus>(false);
    @Output("answered") public answered: EventEmitter<AnswerStatus> = new EventEmitter<AnswerStatus>(false);
    public static increaseTime: EventEmitter<Booster> = new EventEmitter<Booster>(false);
    public static increaseTimeSuccess: EventEmitter<Booster> = new EventEmitter<Booster>(false);
    public static remove: EventEmitter<Booster> = new EventEmitter<Booster>(false);
    public static removeSuccess: EventEmitter<Booster> = new EventEmitter<Booster>(false);
    private _status: QuizStatus;
    public timer: QuizTimer;
    public question: Question;
    public currentQuestion: number = 1;
    public guessed: boolean = false;

    constructor(private _service:QuizService,
                private _toastr:ToastsManager) {

    }

    public getLetter(index:number) {
        return String.fromCharCode(97 + index);
    }

    public getNextQuestion() {
        this._service.getQuestion(this.theme).then(question => {
            this.question = question;
            this.timer = new QuizTimer(20, 20);
        });
    }

    public setAnswer(answer) {
        this.guessed = true;
        this._handleAnswer(answer);
        setTimeout(() => {
            this.currentQuestion += 1;
            this.guessed = false;
            if (this.currentQuestion > this.totalQuestions) {
                this.completed.emit(this._status);
            } else {
                this.getNextQuestion();
            }
        }, 1000);
    }

    private _handleAnswer(answer) {
        if (answer == null) {
            this._toastr.error("Too bad, you didn't answer the question in time.");
            this.answered.emit(new AnswerStatus(false, this.theme));
            this._status.wrong += 1;
        } else if (this.question.correct === answer) {
            this._toastr.success("Correct!");
            this.answered.emit(new AnswerStatus(true, this.theme));
            this._status.correct += 1;
        } else {
            this._toastr.error("That was not the correct answer.");
            this.answered.emit(new AnswerStatus(false, this.theme));
            this._status.wrong += 1;
        }
    }

    public ngOnInit() {
        this._status = new QuizStatus(this.totalQuestions, this.theme);
        QuizDetailComponent.increaseTime.subscribe(booster => this._increaseTime(booster));
        QuizDetailComponent.remove.subscribe(booster => this._deleteWrongAnswer(booster));
        this.getNextQuestion();
    }

    private _increaseTime(data: any) {
        this.timer.bonus += 5;
        QuizDetailComponent.increaseTimeSuccess.emit(data);
    }

    private _deleteWrongAnswer(data: any) {
        if(this.question.answers.length<=2){
            this._toastr.error("There are only " +this.question.answers.length+ " answers, guess the right one!","Not enough answers to delete");
        } else {
            let index = Math.floor(Math.random()*this.question.answers.length);
            while(this.question.correct === this.question.answers[index]){
                index = Math.floor(Math.random()*this.question.answers.length);
            }
            this.question.answers.splice(index,1);
            QuizDetailComponent.removeSuccess.emit(data);
        }
    }
}
