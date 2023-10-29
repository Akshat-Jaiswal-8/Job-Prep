// eslint-disable-next-line react/prop-types
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
export const Card = ({ title }) => {
  const image = `/${title}.png`;
  return (
    <>
      <div className={"flex flex-col items-center justify-center mt-16 p-4"}>
        <div className="card card-compact w-64 bg-base-100 shadow-xl">
          <figure>
            <img alt={"subject"} className={"h-60 w-full"} src={image} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className={"mb-4"}>
              Are you ready to ace your next {title} interview ?
            </p>
            <div className="card-actions justify-center ">
              <Link
                to={`/interview/${title.toLowerCase()}`}
                className="btn btn-accent btn-outline "
              >
                <BsArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
