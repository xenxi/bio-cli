import { printCard } from "./bio-printer.js";
import { DeveloperProfile } from "./content/developer-profile.js";
import { MenuOptions } from "./content/menu-options.js";

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
    "I am a passionate, creative, solution-oriented programmer with skills in multiple languages and technologies",
};

const options = new MenuOptions("What would you like to do?")
  .withSendMail({ email: profile.email })
  .withScheduleMeeting({ meetingUrl: profile.meetingUrl })
  .withCustom({
    action: () => {
      console.log("do custom action");
    },
    completionText: "custom action done",
    label: "custom action",
  });

printCard(profile, {
  menuOptions: options,
  cardTitle: 'xenxi'
});
