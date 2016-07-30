import {QuizThemeKind} from "./quizThemeKind";
export class QuizTheme {
    public kind: QuizThemeKind;
    public name: string;
    public code: string;
    public color: string;
    public complementaryColor: string;


    constructor(kind:QuizThemeKind, name:string, code:string, color:string, complementaryColor:string) {
        this.kind = kind;
        this.name = name;
        this.code = code;
        this.color = color;
        this.complementaryColor = complementaryColor;
    }
}
