import { DeveloperProfile } from "./developer-profile.js";
import { ProfileConsolePresenter } from "./profile-console-presenter.js";

export class CardPrinter {
  constructor(private profile: DeveloperProfile) {}
  public print(boxTitle: string): void {
    console.clear();
    const formattedProfile = ProfileConsolePresenter.print(this.profile, {
      title: boxTitle,
    });
    console.log(formattedProfile);
  }
}
