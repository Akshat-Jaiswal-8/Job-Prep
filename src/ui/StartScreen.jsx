// eslint-disable-next-line react/prop-types
export const StartScreen = ({ dispatch, subject }) => {
  return (
    <>
      <div className={"text-center text-3xl font-poppins font-medium mb-4"}>
        Welcome to {subject} interview Question!
      </div>
      <div
        className={"text-center font-roboto font-normal text-lg m-auto mb-10"}
      >
        Challenging {subject} Interview Questions to test your Javascript
        mastery.
      </div>
      <div className={"text-center"}>
        <button
          className={"btn btn-primary rounded-full "}
          onClick={() => dispatch({ type: "start" })}
        >
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Let's Start
        </button>
      </div>
    </>
  );
};
