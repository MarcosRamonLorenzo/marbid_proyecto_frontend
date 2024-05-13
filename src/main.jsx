import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "@/contexts/AuthProvider.jsx";
import AlertsProvider from "./contexts/AlertsProvider.jsx";
import ThemeProvider from "./contexts/ThemeProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <QueryClientProvider client={new QueryClient()}>
        <ThemeProvider>
          <BrowserRouter>
            <AlertsProvider>
              <AuthProvider>
                <App />
              </AuthProvider>
            </AlertsProvider>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </NextUIProvider>
  </React.StrictMode>
);
