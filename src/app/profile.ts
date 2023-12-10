import { TemaBlackService } from "./tema-black.service";

export class Profile {

    constructor(private TemaBlackService : TemaBlackService ) {}

    updateProfileSettings(newTheme: string, newLanguage: string) {
    this.TemaBlackService.updateTheme(newTheme);
    this.TemaBlackService.updateLanguage(newLanguage);
    }
}
