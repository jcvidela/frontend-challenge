import "./App.css";
import { AppRouter } from "./routers";
import { Provider } from "./context/AppContext";

export default function App() {
  return (
    <Provider>
      <AppRouter />
    </Provider>
  );
}
