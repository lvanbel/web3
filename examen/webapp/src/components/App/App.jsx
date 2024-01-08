import About from "components/About/About";
import JokeList from "components/Jokes/JokeList";
import ViewOne from "components/Jokes/ViewOne";
import Menu from "components/Menu/Menu";
import { Routes, Route, useMatch } from "react-router-dom";
import { Context as JokeContext } from "../../contexts/jokesContext";
import { useContext } from "react";

const App = () => {

  const { jokes } = useContext(JokeContext);

  const match = useMatch("/jokes/:id");
  const joke = match
    ? jokes.find((joke) => joke.id === match.params.id)
    : undefined;

  console.log(joke);

  return (
    <div>
      <h1>Jokes website</h1>
      <Menu />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/jokes" element={<JokeList jokes={ jokes } />} />
        <Route path="/jokes/:id" element={<ViewOne {...{ joke }} />} />
      </Routes>
    </div>
  );
};

export default App;
