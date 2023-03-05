import { CardPrinter } from "./content/card-printer.js";
import { DeveloperProfile } from "./content/developer-profile.js";
import { MenuOptions } from "./content/menu-options.js";
import { PromptMenuPrinter } from "./content/prompt-menu-printer.js";

export async function printCard(
  profile: DeveloperProfile,
  menuOptions?: MenuOptions
): Promise<void> {
  new CardPrinter(profile).print("👋 Hello world");
  if (menuOptions) {
    const menu = new PromptMenuPrinter(menuOptions);
    await menu.show();
  }
}
