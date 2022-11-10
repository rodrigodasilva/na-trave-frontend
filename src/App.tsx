import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppRoutes from "./routes";
import GlobalStyles from "./styles/global";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <AppRoutes />
    </QueryClientProvider>
  );
}
