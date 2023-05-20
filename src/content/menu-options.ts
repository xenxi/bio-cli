import { Experience } from "./experience";
import chalk from "chalk";
import open from 'open';

type MenuOptionArgs = {
  label?: string;
  completionText?: string;
};
abstract class MenuOption {
  public label: string;
  protected completionText: string;

  protected constructor(args: { label: string; completionText: string }) {
    this.label = args.label;
    this.completionText = args.completionText;
  }
  protected abstract execute(): Promise<void>;

  public async onSelected(): Promise<void> {
    await this.execute();
    console.log("\n");
    console.log(this.completionText);
    console.log("\n");
  }
}

class SendMainOption extends MenuOption {
  constructor(private email: string, args?: MenuOptionArgs) {
    super({
      completionText:
        args?.completionText ?? "I'll do my utmost to reach out to you.",
      label: args?.label ?? "Send me an email.",
    });
  }
  protected execute(): Promise<void> {
    open(`mailto:${this.email}`);
    return Promise.resolve();
  }
}
class ScheduleMeetingOption extends MenuOption {
  constructor(private meetingUrl: string, args?: MenuOptionArgs) {
    super({
      completionText:
        args?.completionText ??
        "Looking forward to meeting you at the meeting.",
      label: args?.label ?? "Schedule a Meeting.",
    });
  }
  protected execute(): Promise<void> {
    open(this.meetingUrl);
    return Promise.resolve();
  }
}
class ExitOption extends MenuOption {
  constructor(args?: MenuOptionArgs) {
    super({
      completionText:
        args?.completionText ?? "Looking forward to seeing you again.",
      label: args?.label ?? "Exit...",
    });
  }
  protected execute(): Promise<void> {
    return Promise.resolve();
  }
}
class ExperiencesPrinterOption extends MenuOption {
  private readonly experiences: Array<Experience>;
  constructor(args: {
    label: string;
    completionText: string;
    experiences: Array<Experience>;
  }) {
    super({
      completionText: args.completionText,
      label: args.label,
    });
    this.experiences = args.experiences;
  }
  protected execute(): Promise<void> {
    this.experiences.forEach((experience) => {
      console.log("\n");
      console.log(
        chalk.bold.cyan(experience.company) +
          " - " +
          chalk.italic.cyan(experience.position)
      );
      console.log(
        chalk.italic(experience.startDate + " - " + experience.endDate)
      );
      experience.responsibilities.forEach((responsibility) => {
        console.log("   - " + responsibility);
      });
      if (experience.technologies.length > 0) {
        console.log(
          chalk.bold("Technologies and Methodologies: ") +
            experience.technologies.map((x) => chalk.green(x)).join(", ")
        );
      }
    });
    return Promise.resolve();
  }
}
class CustomOption extends MenuOption {
  private action: () => void;
  constructor(args: {
    label: string;
    completionText: string;
    action: () => void;
  }) {
    super({
      completionText: args.completionText,
      label: args.label,
    });
    this.action = args.action;
  }
  protected execute(): Promise<void> {
    this.action();
    return Promise.resolve();
  }
}

class MenuOptions extends Array<MenuOption> {
  constructor(public title: string, ...options: MenuOption[]) {
    super(...options);
  }
  public withExit(args?: MenuOptionArgs): MenuOptions {
    this.push(new ExitOption(args));
    return this;
  }
  public withSendMail(args: {
    email: string;
    options?: MenuOptionArgs;
  }): MenuOptions {
    this.push(new SendMainOption(args.email, args.options));
    return this;
  }
  public withScheduleMeeting(args: {
    meetingUrl: string;
    options?: MenuOptionArgs;
  }): MenuOptions {
    this.push(new ScheduleMeetingOption(args.meetingUrl, args.options));
    return this;
  }
  public withCustom(args: {
    label: string;
    completionText: string;
    action: () => void;
  }): MenuOptions {
    this.push(new CustomOption(args));
    return this;
  }
  public withExperiencesPrinter(args: {
    label: string;
    completionText: string;
    experiences: Array<Experience>;
  }): MenuOptions {
    this.push(new ExperiencesPrinterOption(args));
    return this;
  }

  public hasExitOption(): boolean {
    return this.some((o) => o instanceof ExitOption);
  }
}

export { MenuOptions, type MenuOptionArgs };
