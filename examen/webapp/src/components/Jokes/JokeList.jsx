import { Link } from "react-router-dom";

const JokeList = ({ jokes }) => (
  <div>
    <h2>Jokes</h2>
    <ul>
      {jokes.map((joke) => (
        <li key={joke.id}>
          <Link to={`/jokes/${joke.id}`}>{joke.question} {joke.answer}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default JokeList;
