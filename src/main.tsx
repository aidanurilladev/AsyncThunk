import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import ReduxProvider from "./providers/ReduxProvider.tsx";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routes/MainRouter.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReduxProvider>
    <BrowserRouter>
      <App />
      <MainRouter/>
    </BrowserRouter>
  </ReduxProvider>
);
