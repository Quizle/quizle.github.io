import {QuizTheme} from "../quizTheme";
import {Question} from "./question";
import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

@Injectable()
export class QuizService {
    private _questions: Map<QuizTheme, Question[]> = new Map<QuizTheme, Question[]>();

    public constructor(private _http: Http) {

    }

    public getQuestion(theme: QuizTheme): Promise<Question> {
        return this._getQuestions(theme).then(questions => {
           let idx = Math.floor(Math.random() * questions.length);
            return questions[idx];
        });
    }

    private _getQuestions(theme: QuizTheme): Promise<Question[]> {
        if (this._questions.get(theme) != null) {
            return new Promise((resolve) => resolve(this._questions.get(theme)));
        } else {
            let promise = this._http
                .get(`app/json/themes/${theme.code}.json`)
                .map(data => data.json())
                .toPromise();
            promise.then(data => this._questions.set(theme, data));
            return promise;
        }
    }
}