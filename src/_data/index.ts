import { headMuscles } from "./galvos_raumenys";
import { krutinesRaumenys } from "./krutines_raumenys";
import { backMuscles } from "./nugaros_raumenys";
import { pilvo_raumenys } from "./pilvo_raumenys";

export const data = {
  ...backMuscles,
  ...headMuscles,
  ...krutinesRaumenys,
  ...pilvo_raumenys,
};
