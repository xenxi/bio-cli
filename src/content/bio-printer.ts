import { CardPrinter } from "./card-printer.js";
import { DeveloperProfile } from "./developer-profile.js";
import { PromptMenuPrinter } from "./prompt-menu-printer.js";

export function printCard(profile: DeveloperProfile): Promise<void> {
  new CardPrinter(profile).print("👋 Hello world");
  return new PromptMenuPrinter(profile).show();
}
