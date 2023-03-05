export type MenuOptionArgs = {
  label?: string;
  completionText?: string;
};
export abstract class MenuOption {
  public label: string;
  protected completionText: string;

  protected constructor(args: { label: string; completionText: string }) {
    this.label = args.label;
    this.completionText = args.completionText;
  }
  protected abstract execute(): Promise<void>;

  public async onSelected(): Promise<void> {
    await this.execute();
    console.log(this.completionText);
  }
}

export class SendMainOption extends MenuOption {
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
export class ScheduleMeetingOption extends MenuOption {
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
export class ExitOption extends MenuOption {
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
export class MenuOptions extends Array<MenuOption> {
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
}
