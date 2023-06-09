import {
  GrIteration,
  GrStorage,
  GrTestDesktop,
  GrSettingsOption,
  GrDocumentPerformance,
  GrTechnology,
  GrDocumentTest,
  GrSystem,
  GrCloudSoftware,
  GrVirtualMachine,
} from "react-icons/gr";
import { IoBugOutline } from "react-icons/io";
import { BsBug } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { MdOutlineSettingsRemote } from "react-icons/md";
import {
  FcSmartphoneTablet,
  FcTabletAndroid,
  FcPhoneAndroid,
  FcMultipleSmartphones,
  FcIpad,
  FcOrgUnit,
} from "react-icons/fc";
import { FiTarget } from "react-icons/fi";

// png image
import Applock from "../../assets/pnglogoimage/Applock.png";
import Appbug from "../../assets/pnglogoimage/Appbug.png";
import Apparrow from "../../assets/pnglogoimage/Apparrow.png";
import Appgrouth from "../../assets/pnglogoimage/Approuth.png";
import Apprecycle from "../../assets/pnglogoimage/Apprecycle.png";
import Appstorgae from "../../assets/pnglogoimage/Appstorage.png";

export const Active = [
  {
    logo: BsBug(),
    bgcolor: "rgb(240, 100, 102)",
    backbgcolor: "8px -8px rgb(255, 225, 225)",
    text: "Bug Busting & Debugging",
  },
  {
    logo: GrSettingsOption(),
    bgcolor: "rgb(244, 131 ,98)",
    backbgcolor: "8px -8px rgb( 255, 231, 225)",
    text: "Quality Checks",
  },
  {
    logo: BsBug(),
    bgcolor: "rgb(238, 208, 248)",
    backbgcolor: "8px -8px rgb(238 ,208, 248)",
    text: "Remote Product Maintenance",
  },
  {
    logo: MdOutlineSettingsRemote(),
    bgcolor: "rgb(78, 189 ,142)",
    backbgcolor: "8px -8px rgb( 210 ,246, 231)",
    text: "Version Enhancements",
  },
  {
    logo: GrDocumentTest(),
    bgcolor: "rgb(247, 164, 87)",
    backbgcolor: "8px -8px rgb(255, 229, 204)",
    text: "Tech Troubleshooting",
  },
  {
    logo: GrTechnology(),
    bgcolor: "rgb( 89, 148, 245)",
    backbgcolor: "8px -8px rgb(180 ,208, 255)",
    text: "Load Testing",
  },
  {
    logo: GrDocumentPerformance(),
    bgcolor: "rgb( 55,189, 234)",
    backbgcolor: "8px -8px rgb( 201, 242 ,255)",
    text: "Performance Oversight",
  },
  {
    logo: BiSupport(),
    bgcolor: "rgb(85 ,119, 204)",
    backbgcolor: "8px -8px rgb(152 ,178, 245)",
    text: "User-Focused Support",
  },
];

export const Fascinate = [
  {
    text: "Longer Life span",
    smalltext:
      "Rectifying errors quickly helps in enhancing the lifespan of mobile applications in a well-defined manner.",
    png: Apparrow,
  },
  {
    text: "Bugs Removal",
    smalltext:
      "Bug removal is an essential part of software maintenance, as it helps to ensure that applications are functioning-defined manner.",
    png: Appbug,
  },
  {
    text: "Upwards App Performance",
    smalltext:
      "When your application gets frequent maintenance at a consistent interval then it eventually follows upwards growth.",
    png: Apprecycle,
  },
  {
    text: "Security Management",
    smalltext:
      "Data security measures keep evolving to eliminate counterfeit measures - so make your apps profound with security management.",
    png: Apparrow,
  },
  {
    text: "Data Management",
    smalltext:
      "User,s data is the most precious asset for your business and consistent maintenance empowers data management functions.",
    png: Appstorgae,
  },
  {
    text: "Reduced Tech Debts",
    smalltext:
      "By addressing issues and making updates in a timely manner, you can avoid accumulating technical issues.",
    png: Apprecycle,
  },
];

export const Cardsdata = [
  {
    icon: FiTarget(),
    text: "Fixed",
    smalltext:
      "Slow and glitch software updates with no-real benefits for users?.",
    link: "Amplework,s Solution",
  },
  {
    icon: FiTarget(),
    text: "issue",
    smalltext:
      "Slow and glitch software updates with no-real benefits for users?",
    link: "Amplework,s Solution",
  },
  {
    icon: FiTarget(),
    text: "issue",
    smalltext: "Need profound resources for program visibility?",
    link: "Amplework,s Solution",
  },
];

export const NumberSpeak = [
  { bluetext: "10-15 Mins", text: "Minimum Incident Response Time" },
  { bluetext: "2-3 Hours", text: "insident solution Time" },
  { bluetext: "350+", text: "" },
  { bluetext: "100%", text: "" },
];
