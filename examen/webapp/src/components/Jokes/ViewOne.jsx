import { useContext } from "react";
import { Context as JokeContext } from "../../contexts/jokesContext";
import { Button, Form, Input, InputNumber } from 'antd';

const ViewOne = ({ joke }) => {

  const { getJokeWithScores, createScore } = useContext(JokeContext);

  const jokeWithScores = getJokeWithScores(joke.id);

  const onFinish = (values) => {
    createScore({
      ...values,
      date: Date.now(),
      joke: joke.id
    });
  };


  return (
    <div>
      <h2>{jokeWithScores.question}</h2>
      <h3>{jokeWithScores.answer}</h3>
      <p>Score count: {jokeWithScores.scoreCount}</p>
      <p>Average score: {jokeWithScores.averageScore}</p>
      <h3>Scores</h3>
      <ul>
        {jokeWithScores.scores.map((score) => (
          <li key={score.id}>{score.score}</li>
        ))}
      </ul>

      <Form name="newScore" onFinish={onFinish}>
        <Form.Item
          label="username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="score"
          name="score"
          type="number"
          rules={[
            {
              required: true,
              message: 'Please input a score!',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            add
          </Button>
        </Form.Item>
      </Form>

    </div>
  );
};

export default ViewOne;
