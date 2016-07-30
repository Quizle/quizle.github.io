import {Profile} from "../../profile/profile";
import {Achievement} from "./Achievement";
import {CompletedGamesHandler} from "./completedGamesHandler";
import {AnswerStatus} from "../../../quiz-game/answerStatus";
import {QuizStatus} from "../../../quiz-game/quizStatus";

export abstract class ProfileHandler {
    abstract getAchieved(profile: Profile, gainedAchievements: Achievement[], answer: AnswerStatus = null, completed: QuizStatus = null, secret: string = null): Achievement[];

    public hasAchievement(achievements: Achievement[], key: string): boolean {
        return achievements.some(achievement => achievement.key == key);
    }
}