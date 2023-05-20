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
  .withExperiencesPrinter({
    completionText: 'If you have any questions or need more information, feel free to ask',
    label: 'Take a look at my professional experiences.',
    experiences: [
      {
        company: "ABC Company",
        position: "Software Developer",
        startDate: "2020-01-01",
        endDate: "2022-12-31",
        responsibilities: ["Developed new features", "Collaborated with the team", "Performed code reviews"],
        technologies: ["JavaScript", "React", "Node.js"]
      },
      {
        company: "XYZ Corporation",
        position: "Project Manager",
        startDate: "2018-06-01",
        endDate: "2020-12-31",
        responsibilities: ["Managed project timelines", "Coordinated resources", "Communicated with stakeholders"],
        technologies: []
      },
      {
        company: "123 Industries",
        position: "Data Analyst",
        startDate: "2019-03-15",
        endDate: "2021-08-31",
        responsibilities: ["Analyzed data trends", "Created reports", "Performed data cleansing"],
        technologies: ["SQL", "Python", "Tableau"]
      }
    ]
  })
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
