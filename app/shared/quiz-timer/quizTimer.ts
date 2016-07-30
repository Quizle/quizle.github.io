export class QuizTimer {
    public current: number;
    public max: number;
    public bonus: number;

    constructor(current: number, max: number) {
        this.current = current;
        this.max = max;
        this.bonus = 0;
    }
}
