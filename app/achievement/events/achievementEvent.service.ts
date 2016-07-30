
import {QuizStatus} from "../../quiz-game/quizStatus";
import {EventEmitter, Injectable} from "angular2/core";
import {AnswerStatus} from "../../quiz-game/answerStatus";
import {Profile} from "../profile/profile";
import {ThemeProfile} from "./themeProfile";
import {ProfileHandler} from "./handlers/profileHandler";
import {CompletedGamesHandler} from "./handlers/completedGamesHandler";
import {AchievementService} from "../achievement.service";
import {Achievement} from "./handlers/Achievement";
import {ProfileService} from "../profile/profile.service";
import {ComboHandler} from "./handlers/comboHandler";
import {QuizTheme} from "../../quiz-game/quizTheme";
import {AnswerAmountHandler} from "./handlers/answerAmountHandler";
import {MasterThemeHandler} from "./handlers/masterThemeHandler";
import {MultiAchievementHandler} from "./handlers/mutliAchievementHandler";
import {ScoreHandler} from "./handlers/scoreHandler";
import {SecretHandler} from "./handlers/secretHandler";

@Injectable()
export class AchievementEventService {
    public completedEvents: EventEmitter<QuizStatus> = new EventEmitter<QuizStatus>();
    public answeredEvents: EventEmitter<AnswerStatus> = new EventEmitter<AnswerStatus>();
    public secretEvents: EventEmitter<string> = new EventEmitter<string>();
    public static achievementEvents: EventEmitter<Achievement> = new EventEmitter<Achievement>();
    private _handlers: ProfileHandler[];

    public constructor(private _achievementService: AchievementService, private _profileService: ProfileService,
                       completedHandler: CompletedGamesHandler, comboHandler: ComboHandler, secretHandler: SecretHandler,
                       answerAmountHandler: AnswerAmountHandler, masterThemeHandler: MasterThemeHandler,
                       multiAchievementHandler: MultiAchievementHandler, scoreHandler: ScoreHandler) {
        this._handlers = [completedHandler, comboHandler, answerAmountHandler, masterThemeHandler, multiAchievementHandler, scoreHandler, secretHandler];
        this.completedEvents.subscribe(data => this._handleCompleted(data));
        this.answeredEvents.subscribe(data => this._handleAnswered(data));
        this.secretEvents.subscribe(data => this._handleSecret(data));
    }

    private _handleCompleted(status: QuizStatus) {
        let profile = this._profileService.getProfile();
        let themeProfile = this._getThemeProfile(profile, status.theme);
        themeProfile.completedGames = themeProfile.completedGames == null ? 1 : themeProfile.completedGames + 1;
        profile.completedGames = profile.completedGames == null ? 1 : profile.completedGames + 1;
        this._storeProfileInfo(profile, this._getAchieved(profile, null, status));
    }

    private _handleAnswered(status: AnswerStatus) {
        let profile = this._profileService.getProfile();
        let themeProfile = this._getThemeProfile(profile, status.theme);
        if (status.correct) {
            themeProfile.consecutively = themeProfile.consecutively == null ? 1 : themeProfile.consecutively + 1;
            themeProfile.correct = themeProfile.correct == null ? 1 : themeProfile.correct + 1;
            profile.consecutively = profile.consecutively == null ? 1 : profile.consecutively + 1;
            profile.correct = profile.correct == null ? 1 : profile.correct += 1;
        } else {
            themeProfile.consecutively = 0;
            themeProfile.wrong = themeProfile.wrong == null ? 1 : themeProfile.wrong + 1;
            profile.consecutively = 0;
            profile.wrong = profile.wrong == null ? 1 : profile.wrong + 1;
        }
        this._storeProfileInfo(profile, this._getAchieved(profile, status));

    }

    private _storeProfileInfo(profile: Profile, achievements: Achievement[]) {
        let rewarded = this._getPoints(achievements);
        profile.points = profile.points == null ? rewarded : profile.points + rewarded;
        this._storeAchieved(achievements);
        this._profileService.saveProfile(profile);
    }

    private _handleSecret(secret: string) {
        let profile = this._profileService.getProfile();
        this._storeProfileInfo(profile, this._getAchieved(profile, null, null, secret));
    }

    private _getThemeProfile(profile: Profile, theme: QuizTheme) {
        let currentThemeProfile = profile.themeProfiles.find(themeProfile => themeProfile.theme.kind == theme.kind);
        if (currentThemeProfile == null) {
            let themeProfile = new ThemeProfile(theme);
            profile.themeProfiles.push(themeProfile);
            return themeProfile;
        } else {
            return currentThemeProfile;
        }
    }

    private _storeAchieved(achievements: Achievement[]) {
        achievements.filter(achievement => achievement != null).forEach(achievement => {
            console.log("New achievement", achievement);
            this._achievementService.pushAchievementToLocalStorage(achievement);
            AchievementEventService.achievementEvents.emit(achievement);
        });
    }

    private _getPoints(achievements: Achievement[]) {
        let points = achievements.map(achievement => achievement.points);
        return points != null && points.length > 0 ? points.reduce((p1, p2) => p1 + p2) : 0;
    }

    private _getAchieved(profile: Profile, answer: AnswerStatus = null, completed: QuizStatus = null, secret: string = null): Achievement[] {
        let achievements = this._achievementService.getAchievementsFromLocalStorage();
        let gained = this._handlers.map(handler => handler.getAchieved(profile, achievements, answer, completed, secret));
        return [].concat.apply([], gained); // Flat map
    }
}
