import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NewsTable } from "./component/NewsTable";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NewsTable />
    </QueryClientProvider>
  );
};
