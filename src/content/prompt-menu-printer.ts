import inquirer, { PromptModule, QuestionCollection } from "inquirer";
import { MenuOptions } from "./menu-options.js";
import { ExitOption } from "./menu-options.js";

export class PromptMenuPrinter {
  private readonly prompt: PromptModule;
  constructor(private options: MenuOptions) {
    this.prompt = inquirer.createPromptModule();

    if (!options.some((o) => o instanceof ExitOption)) {
      options.push(new ExitOption());
    }
  }
  public async show(): Promise<void> {
    const questions = this.createQuestions();
    await this.printMenu(questions);
  }

  private createQuestions(): QuestionCollection {
    const commands = this.options.map((option) => ({
      name: option.label,
      value: () => option.onSelected(),
    }));

    const question: QuestionCollection = [
      {
        type: "list",
        name: "execute",
        message:this.options.title,
        choices: commands,
      },
    ];

    return question;
  }
  private async printMenu(questions: QuestionCollection): Promise<void> {
    const command = await this.prompt(questions);
    command.execute();
  }
}
