import { data } from "@/_data";
import { AppApi, Muscle, Question } from "./interface";
import { uuidv4 } from "ts-prime";
import { randomChoice, randomMultipleChoices, shuffle } from "@/lib/utils";



export class AppApiLocal implements AppApi {
  async nextQuestion(): Promise<Question> {
    const id = uuidv4();
    const muscles = Object.entries(data).map(
      ([k, v]): Muscle => ({ ...v, id: k })
    );
    const muscle = randomChoice(muscles);

    const randomExcludedChoice = (): Muscle[] => {
      const choices = randomMultipleChoices(
        muscles.filter((c) => c.id !== muscle.id),
        3
      );
      return choices;
    };

    const choices = shuffle([muscle, ...randomExcludedChoice()]);
    const question = {
      id,
      choices,
      correctAnswerMuscle: muscle.id,
    };
    return question;
  }
}

