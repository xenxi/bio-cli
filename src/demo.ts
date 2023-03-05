import { DeveloperProfile } from "./content/developer-profile.js";
import { MenuOptions } from "./content/menu-options.js";
import { print } from "./bio-printer.js";

const profile: DeveloperProfile = {
  name: "Antonio Manuel Díaz Moreno",
  profession: "Software developer",
  currentEmployer: "AIDA",
  githubName: "xenxi",
  linkedinName: "antonio-manuel-díaz-moreno",
  websiteUrl: "https://antoniomdm.dev/",
  consoleCommand: "amdiaz",
  email: "antoniom.diaz.moreno@gmail.com",
  meetingUrl: "https://calendly.com/antoniom-diaz-moreno/30min",
  description:
    "I would like to become proficient in software development and ensure that I'm doing it right",
};

const options = new MenuOptions(
  "What's your code adventure, adventurer? Choose your destiny! 🧙‍♂️ "
)
  .withSendMail({ email: profile.email })
  .withScheduleMeeting({ meetingUrl: profile.meetingUrl });

print(profile, options);
