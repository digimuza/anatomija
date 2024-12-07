export interface Muscle {
  id: string;
  name: string;
  latin?: string;
  group: string;
  pictures: string[];
  start?: string;
  finish?: string;
  function?: string;
}

export interface Question {
  id: string;
  correctAnswerMuscle: string;
  choices: Muscle[];
}

export interface AnsweredQuestion extends Question {
  userAnswerMuscleId: string;
}

export interface AppApi {
  nextQuestion(quizId: string): Promise<Question>;
}
