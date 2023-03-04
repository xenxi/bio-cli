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
      completionText: args?.completionText ?? "I'll do my utmost to reach out to you.",
      label: args?.label ?? "Send me an email.",
    });
  }
  protected execute(): Promise<void> {
    open(`mailto:${this.email}`);
    return Promise.resolve();
  }
}
