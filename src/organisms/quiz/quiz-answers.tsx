import { cn, shuffle } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { PropsWithChildren, useMemo, useState } from "react";
import { delay } from "ts-prime";
import { QuizContext } from "./context";
import { Question } from "@/_api/interface";
import { Carousel, CarouselContent } from "@/components/ui/carousel";

export function QuizAnswerButton(props: PropsWithChildren<{ id: string }>) {
  const [correctness, setCorrectness] = useState<
    "correct" | "incorrect" | "neutral"
  >("neutral");
  const { question, next, stage, setStage, correctAnswer } =
    QuizContext.useContext();
  const isCorrect = question.correctAnswerMuscle === props.id;
  const clickMutation = useMutation({
    mutationFn: async () => {
      if (isCorrect) {
        setCorrectness("correct");
        await delay(1000);
        if (stage === "name" && correctAnswer.start) {
          setStage("start");
          return;
        }
        if (stage === "start" && correctAnswer.finish) {
          setStage("finish");
          return;
        }
        if (stage === "finish" && correctAnswer.function) {
          setStage("function");
          return;
        }
        next();
        setStage("name");
      }

      setCorrectness("incorrect");
    },
  });

  return (
    <div
      onMouseDown={() => {
        clickMutation.mutate();
      }}
      className={cn(
        "text-wrap text-center flex justify-center items-center cursor-pointer",
        "min-h-12 p-8 bg-black rounded-md",
        correctness === "correct"
          ? "active:focus:hover:bg-green-500 bg-green-500"
          : "",
        correctness === "incorrect"
          ? "active:focus:hover:bg-red-500 bg-red-500"
          : ""
      )}
    >
      {correctness === "neutral" && <>{props.children}</>}
      {correctness === "correct" && <>Teisingai</>}
      {correctness === "incorrect" && <>Neteisingai</>}
    </div>
  );
}

export function QuizAnswers() {
  const { question, stage } = QuizContext.useContext();
  return (
    <div key={stage} className="grid grid-cols-1 gap-2">
      {shuffle(question.choices).map((choice) => {
        if (choice[stage] == null) return null;
        return (
          <QuizAnswerButton id={choice.id}>{choice[stage]}</QuizAnswerButton>
        );
      })}
    </div>
  );
}

export function QuizHeader() {
  const { stage, correctAnswer } = QuizContext.useContext();
  return (
    <div className="text-center py-8 flex flex-col">
      {stage === "name" && (
        <span className="text-2xl">Kas tai per raumuo?</span>
      )}
      {stage === "start" && (
        <span className="text-2xl">Nurodyk raumens pradžią</span>
      )}
      {stage === "finish" && (
        <span className="text-2xl">Nurodyk raumens pabaigą</span>
      )}
      {stage === "function" && (
        <span className="text-2xl">Nurodyk raumens funkciją</span>
      )}
      <span>{correctAnswer?.group}</span>
    </div>
  );
}

export function QuizMuscleImage() {
  const { correctAnswer } = QuizContext.useContext();
  return (
    <div className="bg-black rounded-md overflow-hidden">
      <Carousel>
        <CarouselContent>
          {correctAnswer.pictures.map((v) => {
            return <img className="w-full" src={v} alt="" />;
          })}
        </CarouselContent>
      </Carousel>
      <QuizLatinMuscleName />
    </div>
  );
}

export function QuizLatinMuscleName() {
  const { correctAnswer } = QuizContext.useContext();
  if (correctAnswer.latin == null) return null;
  return (
    <div className="text-center py-3">
      <span className="text-md">{correctAnswer.latin}</span>
    </div>
  );
}

export function QuizComponent(props: { question: Question; next: () => void }) {
  const [stage, setStage] = useState<"name" | "start" | "finish" | "function">(
    "name"
  );

  const correctAnswer = useMemo(() => {
    const correctAnswer = props.question.choices.find(
      (c) => c.id === props.question.correctAnswerMuscle
    );
    return correctAnswer;
  }, [props.question]);

  if (correctAnswer == null) return null;

  return (
    <QuizContext.Provider
      value={{
        correctAnswer,
        question: props.question,
        next: props.next,
        stage,
        setStage,
      }}
    >
      <div className=" w-full h-full dark:bg-slate-900 flex justify-center items-center mb-16">
        <div className="h-full w-full dark:text-white p-2 flex flex-col justify-between max-w-[600px]">
          <div className="grow pb-3">
            <QuizHeader />
            <QuizMuscleImage />
          </div>
          <QuizAnswers key={props.question.id} />

          <div className="min-h-32"></div>
        </div>
      </div>
    </QuizContext.Provider>
  );
}
