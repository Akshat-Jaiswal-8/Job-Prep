import { supabase } from "../services/supabase.js";
import { useEffect, useReducer } from "react";
import toast from "react-hot-toast";
import { StartScreen } from "../ui/StartScreen.jsx";
import { Questions } from "./Questions.jsx";
import { Navbar } from "../ui/Navbar.jsx";
import { useParams } from "react-router-dom";
import { Finish } from "./Finish.jsx";

const SECS_PER_QUESTION = 150;

const initialState = {
  questions: [],
  answers: [],
  status: "loading", // loading, error, ready, active, finished
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "answerReceived":
      return { ...state, answers: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "nextQuestion": {
      state.index++;
      if (state.index === state.questions.length) {
        return {
          ...state,
          status: "finished",
        };
      }
      return {
        ...state,
        index: state.index,
      };
    }

    case "restart":
      return { ...initialState, questions: state.questions, status: "ready" };
    case "tick": {
      state.secondsRemaining--;
      if (state.secondsRemaining === 0)
        return {
          ...state,
          secondsRemaining: SECS_PER_QUESTION,
          index: state.index++,
        };
      return {
        ...state,
      };
    }

    default:
      throw new Error("Action unknown");
  }
}
export default function QuestionPage() {
  const { subject } = useParams();
  const [{ questions, answers, status, index }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const image_source = `/${subject}.png`;

  useEffect(() => {
    const getQuestions = async () => {
      try {
        let { data: react } = await supabase.from(`${subject}`).select("*");
        const arr = react.map((row) => {
          return row.questions;
        });
        const ansArr = react.map((row) => {
          return row.answers;
        });
        dispatch({ type: "dataReceived", payload: arr });
        dispatch({ type: "answerReceived", payload: ansArr });
      } catch (error) {
        toast.error(error);
      }
    };
    getQuestions();
  }, []);
  return (
    <>
      <Navbar />
      <div
        className={
          "my-16 mx-auto text-center text-5xl font-medium font-poppins"
        }
      >
        <span className={"flex gap-5 items-center  justify-center"}>
          <img
            alt={"subject image"}
            className={"w-16 h-16 rounded-full items-center"}
            src={image_source}
          />
          THE {subject.toUpperCase()} SHOWDOWN!
        </span>
      </div>
      {status === "ready" && (
        <StartScreen subject={subject} dispatch={dispatch} />
      )}
      {status === "active" && (
        <Questions
          answers={answers[index]}
          question={questions[index]}
          dispatch={dispatch}
        />
      )}
      {status === "finished" && <Finish dispatch={dispatch} />}
    </>
  );
}
