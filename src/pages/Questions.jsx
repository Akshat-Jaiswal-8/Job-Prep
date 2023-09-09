import { PiMicrophone } from "react-icons/pi";
import { useState } from "react";
import "regenerator-runtime/runtime";
import Speech from "react-speech";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import checkAnswer from "../services/TextToGpt.js";

// eslint-disable-next-line react/prop-types
export const Questions = ({ question, answers, dispatch }) => {
  const [textToCopy, setTextToCopy] = useState();
  const [rating, setRating] = useState(NaN);

  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [start, setStart] = useState(false);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [finish, setFinish] = useState(false);
  const handleStop = () => {
    setStart(false);
    SpeechRecognition.stopListening();
  };
  const handleStart = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });
    setStart(true);
  };

  const handleNext = () => {
    setFinish(false);
    dispatch({ type: "nextQuestion" });
    setRating(NaN);
  };

  const handleFinish = async () => {
    setFinish(true);
    const rating = await checkAnswer({ question, answers });
    setRating(rating);
    console.log(rating);
  };
  return (
    <>
      <h4
        className={
          " border-b-2 border-dashed border-gray-600 mx-40  text-3xl p-3 text-center mb-16"
        }
      >
        {question}
      </h4>

      <div className={"text-center  mb-16"}>
        {start ? (
          <button
            onClick={() => {
              handleStop();
            }}
            className={"btn btn-primary text-center"}
          >
            Stop <PiMicrophone />
          </button>
        ) : (
          <button
            className={"btn btn-primary text-center"}
            onClick={() => {
              handleStart();
            }}
          >
            Start <PiMicrophone />
          </button>
        )}

        <button
          className={"btn btn-primary btn-outline m-4"}
          onClick={() => handleNext()}
          disabled={!finish}
        >
          Next
        </button>
      </div>
      <div
        className="textarea textarea-bordered h-[20rem] mt-20 mb-10 mx-20 text-2xl"
        onClick={() => setTextToCopy(transcript)}
      >
        <p className={"mb-2"}>Your Answer - </p>
        <p className={"font-poppins"}>{transcript}</p>
      </div>
      <div className={"text-center"}>
        <button
          onClick={() => handleFinish()}
          className={"btn btn-primary text-center"}
        >
          Finish
        </button>
        {/* Open the modal using document.getElementById('ID').showModal() method */}
        <button
          disabled={!finish}
          className="btn primary btn-outline m-4"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Rating
        </button>
        <dialog id="my_modal_1" className="modal ">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Rating is {rating}</h3>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        {finish ? (
          <div className="textarea textarea-bordered h-[20rem] mt-20 mb-10 mx-20 text-2xl">
            <p className={"mb-2"}>Correct Answer - </p>
            <p className={"font-poppins"}>{answers}</p>
            <Speech text={answers}></Speech>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};
