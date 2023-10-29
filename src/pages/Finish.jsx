export const Finish = ({ dispatch }) => {
  return (
    <div className="  rounded-full flex flex-col gap-5 justify-center items-center p-6 m-[20rem]">
      <span className={"font-poppins text-green-500 text-7xl"}>
        Well Done !
      </span>
      <button
        onClick={() => dispatch({ type: "restart" })}
        className={"btn btn-outline  text-2xl m-auto "}
      >
        Restart
      </button>
    </div>
  );
};
