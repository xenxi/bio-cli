import { CardPrinter } from "./content/card-printer.js";
import { DeveloperProfile } from "./content/developer-profile.js";
import { MenuOptions } from "./content/menu-options.js";
import { PromptMenuPrinter } from "./content/prompt-menu-printer.js";

async function printCard(
  profile: DeveloperProfile,
  options: {
    menuOptions?: MenuOptions;
    cardTitle?: string;
  } = {}
): Promise<void> {
  const { menuOptions, cardTitle } = options;

  new CardPrinter(profile).print(cardTitle ?? "");
  if (menuOptions) {
    const menu = new PromptMenuPrinter(menuOptions);
    await menu.show();
  }
}
export { printCard, type DeveloperProfile, type MenuOptions };
