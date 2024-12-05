import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function randomChoice<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function shuffle<T>(arr: T[]): T[] {
  const res = [...arr];
  for (let i = res.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = res[i];
    res[i] = res[j];
    res[j] = temp;
  }
  return res;
}

export function randomMultipleChoices<T>(arr: T[], count: number): T[] {
  const res: T[] = [];
  for (let i = 0; i < count; i++) {
    const choice = randomChoice(arr);
    if (res.includes(choice)) {
      i--;
      continue;
    }
    res.push(choice);
  }
  return res;
}