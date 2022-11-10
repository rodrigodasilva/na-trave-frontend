import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import { AuthenticationProvider } from "./hooks/useAuthentication";
import AppRoutes from "./routes";
import GlobalStyles from "./styles/global";

const queryClient = new QueryClient();

export default function App() {
  return (
    <AuthenticationProvider>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <ToastContainer />
        <AppRoutes />
      </QueryClientProvider>
    </AuthenticationProvider>
  );
}
