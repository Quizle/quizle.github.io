import {Profile} from "./profile";
import {Injectable} from "angular2/core";

@Injectable()
export class ProfileService {
    public saveProfile(profile: Profile) {
        localStorage.setItem("quizle.profile", JSON.stringify(profile));
    }

    public getProfile(): Profile {
        let profileString = localStorage.getItem("quizle.profile");
        if (profileString != null) {
            return JSON.parse(profileString);
        } else {
            let profile = new Profile(null);
            profile.themeProfiles = [];
            return profile;
        }
    }
}