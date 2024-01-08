import { BrowserRouter as Router } from "react-router-dom";
import App from "components/App/App";
import { ProviderWrapper as JokesProviderWrapper } from "../../contexts/jokesContext";

const AppLoader = () => {
  return (
    <JokesProviderWrapper >
      <Router>
        <App />
      </Router>
    </JokesProviderWrapper >
  );
};

export default AppLoader;
