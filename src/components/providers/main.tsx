import { ApiProvider } from "@/_api/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const client = new QueryClient();

export function AppProvider(props: PropsWithChildren<unknown>) {
  return (
    <QueryClientProvider client={client}>
      <ApiProvider>{props.children}</ApiProvider>
    </QueryClientProvider>
  );
}
