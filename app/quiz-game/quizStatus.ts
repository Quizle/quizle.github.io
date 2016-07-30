import {QuizTheme} from "./quizTheme";
export class QuizStatus {
    public total: number;
    public correct: number;
    public wrong: number;
    public theme: QuizTheme;

    public constructor(total: number = 0, theme: QuizTheme, correct: number = 0, wrong: number = 0) {
        this.total = total;
        this.theme = theme;
        this.correct = correct;
        this.wrong = wrong;
    }
}