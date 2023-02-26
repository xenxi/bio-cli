import inquirer, { Answers, PromptModule, QuestionCollection } from "inquirer";
import open from "open";
import { DeveloperProfile } from "./developer-profile.js";

export class PromptMenuPrinter {
  private readonly prompt: PromptModule;
  constructor(private profile: DeveloperProfile) {
    this.prompt = inquirer.createPromptModule();
  }
  public async show(): Promise<void> {
    const questions = this.createQuestions();
    await this.printMenu(questions);
  }

  private createQuestions(): QuestionCollection {
    const choices: Answers[] = [
      {
        name: "📧 Send a digital carrier pigeon!",
        value: () => {
          open(`mailto:${this.profile.email}`);
          console.log(
            "\nAll done! Your message is now speeding through the interwebs, ready to land in your inbox.\n"
          );
        },
      },
      {
        name: "📅 Plan a coffee (or tea) talk!",
        value: () => {
          open(this.profile.meetingUrl);
          console.log(
            "\nI'll see you at the meeting! Don't forget to bring your coffee (or tea) \n"
          );
        },
      },
      {
        name: "👀 Take a peek at my work wizardry!",
        value: () => {
          console.log(
            "\nThe elusive resume seems to have vanished, but fear not! It's a work in progress, so stay tuned and watch this space!\n"
          );
        },
      },
      {
        name: "👋 Goodbye, world..",
        value: () => {
          console.log(
            "\nWishing you a debugging-free day. See you in the next coding adventure!\n"
          );
        },
      },
    ];
    const questions: QuestionCollection = [
      {
        type: "list",
        name: "action",
        message:
          "What's your code adventure, adventurer? Choose your destiny! 🧙‍♂️ ",
        choices,
      },
    ];

    return questions;
  }
  private async printMenu(questions: QuestionCollection): Promise<void> {
    const answer = await this.prompt(questions);
    answer.action();
  }
}
