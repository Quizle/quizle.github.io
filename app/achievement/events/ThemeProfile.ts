import {QuizTheme} from "../../quiz-game/quizTheme";

export class ThemeProfile {
    public theme: QuizTheme;
    public completedGames: number;
    public correct: number;
    public wrong: number;
    public consecutively: number;


    constructor(theme:QuizTheme = null) {
        this.theme = theme;
    }
}