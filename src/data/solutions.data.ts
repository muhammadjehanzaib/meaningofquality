import { LString } from "@/data/i18n";

export type SolutionEntry = {
  id: string;
  title: LString;
  subtitle?: LString;
  icon?: string; // could map to assets via solutionThemeById
};

export const solutionsData: SolutionEntry[] = [
  {
    id: "construction",
    title: { en: "Construction", ar: "البناء" },
    subtitle: { en: "Bonding, sealing & insulation", ar: "الربط، السد والعزل" },
    icon: "/images/solutions/construction.png",
  },
  {
    id: "automotive",
    title: { en: "Automotive", ar: "السيارات" },
    subtitle: { en: "Assembly and repair", ar: "التجميع والإصلاح" },
    icon: "/images/solutions/automotive.png",
  },
  {
    id: "industrial",
    title: { en: "Industrial", ar: "الصناعي" },
    subtitle: { en: "Maintenance & MRO", ar: "الصيانة والأعمال الصناعية" },
    icon: "/images/solutions/industrial.png",
  },
  {
    id: "home-diy",
    title: { en: "Home & DIY", ar: "المنزل واصنعه بنفسك" },
    subtitle: { en: "Repairs & improvements", ar: "إصلاحات وتحسينات" },
    icon: "/images/solutions/home-diy.png",
  },
];

