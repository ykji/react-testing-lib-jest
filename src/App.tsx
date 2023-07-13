import "./App.css";
import MuiMode from "./components/MuiMode/MuiMode";
import { AppProviders } from "./providers/app-providers";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
