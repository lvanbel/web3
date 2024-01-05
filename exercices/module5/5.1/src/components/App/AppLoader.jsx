import { ProviderWrapper as VotesProviderWrapper } from "../../contexts/countersContext.jsx";
import App from "components/App/App.jsx";

const AppLoader= () => {
    return (
        <VotesProviderWrapper >
            <App />
        </VotesProviderWrapper >
    )
}

export default AppLoader;