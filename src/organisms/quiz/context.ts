import { Muscle, Question } from "@/_api/interface";
import { createStaticContext } from "@/lib/context";

export type QuizStage = "name" | "start" | "finish" | "function"
export const QuizContext = createStaticContext<{
  question: Question;
  next: () => void;
  correctAnswer: Muscle
   stage: QuizStage;
    setStage: (stage: QuizStage) => void;
}>("QuizContext");