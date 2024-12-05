import { useQuery } from "@tanstack/react-query";
import { useApi } from "@/_api";
import { QuizComponent } from "@/organisms/quiz/quiz-answers";

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

export function QuestionPage() {
  const { data, refetch } = useQuestionApi();
  if (data == null) return null;
  return (
    <QuizComponent
      question={data}
      next={() => {
        refetch();
      }}
    />
  );
}
