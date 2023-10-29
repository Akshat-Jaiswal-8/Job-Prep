import { Card } from "./Card.jsx";

export const Carousel = () => {
  return (
    <div className={"p-16 m-auto justify-center flex "}>
      <div className=" carousel carousel-center  p-4 space-x-4 bg-neutral rounded-box">
        <div className="carousel-item">
          <Card title={"javascript"} />
        </div>
        <div className="carousel-item">
          <Card title={"reactjs"} />
        </div>
        <div className="carousel-item">
          <Card title={"nodejs"} />
        </div>
        <div className="carousel-item">
          <Card title={"machine-learning"} />
        </div>
      </div>
    </div>
  );
};
