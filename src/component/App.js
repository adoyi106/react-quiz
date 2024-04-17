import Header from "./Header";
import Main from "./Main";
import Error from "./Error";
import Loader from "./Loader";
import StartScreen from "./StartScreen";
import Questions from "./Questions";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishingScreen from "./FinishingScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import "./App.css";
import "./index.css";
import { useQuiz } from "../context/QuizContext";

export default function App() {
  const { status } = useQuiz();
  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen
          // numQuestions={numQuestions} dispatch={dispatch}
          />
        )}
        {status === "active" && (
          <>
            <Progress
            // index={index}
            // numQuestions={numQuestions}
            // points={points}
            // maxPossiblePoints={maxPossiblePoints}
            // answer={answer}
            />
            <Questions
            // question={questions[index]}
            // answer={answer}
            // dispatch={dispatch}
            />
            <Footer>
              <Timer
              //  secondsRemaining={secondsRemaining} dispatch={dispatch}
              />
              <NextButton
              // dispatch={dispatch}
              // answer={answer}
              // index={index}
              // numQuestions={numQuestions}
              />
            </Footer>
          </>
        )}
        {status === "finished" && (
          <FinishingScreen
          // points={points}
          // maxPossiblePoints={maxPossiblePoints}
          // highscore={highscore}
          // dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
}
