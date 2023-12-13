import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import { PayoutHistory } from "./pages/PayoutHistory";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PayoutHistory />
    </ThemeProvider>
  );
}

export default App;
