import boxen from "boxen";
import chalk from "chalk";
import { DeveloperProfile } from "./developer-profile.js";

export class ProfileConsolePresenter {
  public static print(
    profile: DeveloperProfile,
    params: { title: string }
  ): string {
    const body = this.buildBody(profile);

    return this.frameText({ text: body, title: params.title });
  }

  private static frameText(params: { text: string; title: string }): string {
    return boxen(params.text, {
      title: params.title,
      titleAlignment: "center",
      padding: 1,
      borderColor: "green",
      borderStyle: "single",
    });
  }
  private static formatText(params: {
    label: string;
    text: string;
    highlightedText: string;
  }): string {
    const formattedLabel = chalk.white.bold(params.label.padStart(12, " "));
    const formattedText = chalk.gray(params.text);
    const formattedHighlightedText = chalk.green(params.highlightedText);

    return `${formattedLabel}  ${formattedText}${formattedHighlightedText}`;
  }

  private static buildBody(profile: DeveloperProfile): string {
    const profileFormated = {
      name: chalk.bold.green(`              ${profile.name}`),
      work: `${chalk.white(`${profile.profession} at`)} ${chalk
        .hex("#2b82b2")
        .bold(profile.profession)}`,
      github:
        chalk.gray("https://github.com/") + chalk.green(profile.githubName),
      linkedin:
        chalk.gray("https://linkedin.com/in/") +
        chalk.blue(profile.linkedinName),
      web: chalk.cyan(profile.websiteUrl),
      npx: `${chalk.red("npx")} ${chalk.white(profile.consoleCommand)}`,

      labelWork: chalk.white.bold("       Work:"),
      labelGitHub: chalk.white.bold("     GitHub:"),
      labelLinkedIn: chalk.white.bold("   LinkedIn:"),
      labelWeb: chalk.white.bold("        Web:"),
      labelCard: chalk.white.bold("       Card:"),
    };

    return [
      `${profileFormated.name}\n`,
      `${profileFormated.labelWork}  ${profileFormated.work}\n`,
      this.formatText({
        label: "GitHub:",
        text: "https://github.com/",
        highlightedText: profile.githubName,
      }),
      `${profileFormated.labelLinkedIn}  ${profileFormated.linkedin}`,
      `${profileFormated.labelWeb}  ${profileFormated.web}\n`,
      `${profileFormated.labelCard}  ${profileFormated.npx}\n`,
      `${chalk.italic(profile.description)}`,
    ].join("\n");
  }
}
