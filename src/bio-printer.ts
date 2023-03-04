import { CardPrinter } from "./content/card-printer.js";
import { DeveloperProfile } from "./content/developer-profile.js";
import { MenuOption, SendMainOption, ScheduleMeetingOption } from "./content/menu-options.js";
import { PromptMenuPrinter } from "./content/prompt-menu-printer.js";

export function print(profile: DeveloperProfile, menuOptions: MenuOption[] = []): Promise<void> {
  new CardPrinter(profile).print("👋 Hello world");
  return new PromptMenuPrinter(menuOptions).show();
}
const profile: DeveloperProfile = {
  name: "Antonio Manuel Díaz Moreno",
  profession: "Software developer",
  currentEmployer: "AIDA",
  githubName: "xenxi",
  linkedinName: "antonio-manuel-díaz-moreno",
  websiteUrl: "https://antoniomdm.dev/",
  consoleCommand: "amdiaz",
  email: "antoniom.diaz.moreno@gmail.com",
  meetingUrl: "https://calendly.com/antoniom-diaz-moreno/30min",
};

print(profile, [
  new SendMainOption( profile.email),
  new ScheduleMeetingOption(profile.meetingUrl)
]);