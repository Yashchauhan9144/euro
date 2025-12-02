import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { RouteList } from "./ui-design/shared/app-routing";
import ScrollToTop from "./ui-design/shared/scroll-to-top";
import { ThemeProvider } from "@mui/material";
import customTheme from "./theme";
import Aos from "aos";

function App() {
  // AOS Animation
  useEffect(() => {
    Aos.init({
      duration: 500,
      once: true,
    });
  }, []);
  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <ScrollToTop />
        <RouteList />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
