import { Button } from "@/components/ui/button";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useApi } from "@/_api";
import { cn, randomChoice, shuffle } from "@/lib/utils";
import { delay } from "ts-prime";
import { Question } from "@/_api/interface";

const QuestionContext = createContext<Question | null>(null);

function useQuestion() {
  const question = useContext(QuestionContext);
  if (question == null) {
    throw new Error("Question not found");
  }
  return question;
}

function useQuestionApi() {
  const api = useApi();
  return useQuery({
    queryKey: ["muscles"],
    queryFn: () => {
      console.log("fetching");
      return api.nextQuestion();
    },
  });
}

function QuestionAnswerButton({
  children,
  onSuccess,
  isCorrect,
}: PropsWithChildren<{ isCorrect?: boolean; onSuccess: () => void }>) {
  const [correctness, setCorrectness] = useState<
    "correct" | "incorrect" | "neutral"
  >("neutral");

  const clickMutation = useMutation({
    mutationFn: async () => {
      if (isCorrect) {
        setCorrectness("correct");
        await delay(1000);
        onSuccess();
        return;
      }

      setCorrectness("incorrect");
    },
  });

  return (
    <Button
      onMouseDown={() => {
        clickMutation.mutate();
      }}
      className={cn(
        "text-wrap",
        "min-h-12 p-8",
        correctness === "correct"
          ? "active:bg-green-500 focus:bg-green-500 bg-green-500"
          : "",
        correctness === "incorrect" ? "active:bg-red-500 bg-red-500" : ""
      )}
      variant={"outline"}
      size={"lg"}
    >
      {children}
    </Button>
  );
}

function QuestionAnswers(props: {
  questionType: "name" | "start" | "finish" | "function";
  onSuccess: () => void;
}) {
  const data = useQuestion();
  return (
    <div key={props.questionType} className="grid grid-cols-1 gap-2">
      {shuffle(data.choices).map((choice) => {
        return (
          <QuestionAnswerButton
            onSuccess={props.onSuccess}
            isCorrect={choice.id === data.correctAnswerMuscle}
          >
            {choice[props.questionType]}
          </QuestionAnswerButton>
        );
      })}
    </div>
  );
}

export function QuestionPage() {
  const [stage, setStage] = useState<"name" | "start" | "finish" | "function">(
    "name"
  );
  const { data, refetch } = useQuestionApi();
  const picture = useMemo(() => {
    if (data == null) return null;
    const correctAnswer = data.choices.find(
      (c) => c.id === data.correctAnswerMuscle
    );
    if (correctAnswer == null) return null;
    return randomChoice(correctAnswer.pictures);
  }, [data]);
  if (data == null) return null;
  if (picture == null) return null;
  return (
    <QuestionContext.Provider value={data}>
      <div className=" w-full h-full dark:bg-slate-900 flex justify-center items-center mb-16">
        <div className="h-full w-full dark:text-white p-2 flex flex-col justify-between max-w-[600px]">
          <div className="grow pb-3">
            <div className="text-center py-8 text-2xl">Kas tai per raumuo?</div>
            <div className="rounded-md overflow-hidden">
              <img className="w-full" src={picture} alt="" />
            </div>
          </div>
          <QuestionAnswers
            key={data.id}
            questionType={stage}
            onSuccess={() => {
              if (stage === "name") {
                setStage("start");
                return;
              }
              if (stage === "start") {
                setStage("finish");
                return;
              }
              if (stage === "finish") {
                setStage("function");
                return;
              }
              if (stage === "function") {
                refetch();
                setStage("name");
              }
            }}
          />

          <div className="min-h-32"></div>
        </div>
      </div>
    </QuestionContext.Provider>
  );
}
