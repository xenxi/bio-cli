import { CardPrinter } from "./content/card-printer.js";
import { DeveloperProfile } from "./content/developer-profile.js";
import { PromptMenuPrinter } from "./content/prompt-menu-printer.js";

export function print(profile: DeveloperProfile): Promise<void> {
  new CardPrinter(profile).print("👋 Hello world");
  return new PromptMenuPrinter(profile).show();
}
 