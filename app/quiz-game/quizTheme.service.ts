import {QuizTheme} from "./quizTheme";
import {QuizThemeKind} from "./quizThemeKind";

export class QuizThemeService {
    private _themes: Map<string, QuizTheme> = new Map<string, QuizTheme>()
        .set("animals", new QuizTheme(QuizThemeKind.ANIMALS, "Animals", "animals", "violet", "olive"))
        .set("brain-teasers", new QuizTheme(QuizThemeKind.BRAIN_TEASERS, "Brain teasers", "brain-teasers", "pink", "green"))
        .set("general", new QuizTheme(QuizThemeKind.GENERAL, "General", "general", "teal", "red"))
        .set("entertainment", new QuizTheme(QuizThemeKind.ENTERTAINMENT, "Entertainment", "entertainment", "yellow", "blue"))
        .set("kids", new QuizTheme(QuizThemeKind.KIDS, "For kids", "kids", "blue", "yellow"))
        .set("literature", new QuizTheme(QuizThemeKind.LITERATURE, "Literature", "literature", "purple", "orange"))
        .set("movies", new QuizTheme(QuizThemeKind.MOVIES, "Movies", "movies", "olive", "violet"))
        .set("science", new QuizTheme(QuizThemeKind.SCIENCE, "Science and technology", "science", "red", "teal"))
        .set("sports", new QuizTheme(QuizThemeKind.SPORTS, "Sports", "sports", "green", "pink"))
        .set("videogames", new QuizTheme(QuizThemeKind.VIDEOGAMES, "Videogames", "videogames", "orange", "purple"));


    public findOne(theme: string): QuizTheme {
        return this._themes.get(theme);
    }

    public findAll(): QuizTheme[] {
        return Array.from(this._themes.values());
    }
}
