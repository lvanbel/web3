import { ProviderWrapper as OpinionsProviderWrapper } from "../../contexts/opinionsContext.jsx";
import App from "components/App/App.jsx";

const AppLoader= () => {
    return (
        <OpinionsProviderWrapper >
            <App />
        </OpinionsProviderWrapper >
    )
}

export default AppLoader;