import { CardPrinter } from "./card-printer";
import { DeveloperProfile } from "./developer-profile";
import { PromptMenuPrinter } from "./prompt-menu-printer";

export function printCard(profile: DeveloperProfile): Promise<void> {
  new CardPrinter(profile).print("👋 Hello world");
  return new PromptMenuPrinter(profile).show();
}
