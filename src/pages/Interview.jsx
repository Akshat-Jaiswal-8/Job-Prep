import { Carousel } from "../ui/Carousel.jsx";
import { Navbar } from "../ui/Navbar.jsx";

export const Interview = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center flex-col pt-20 min-h-[81.5vh] bg-base-200">
        <div className=" text-center">
          <div>
            <h1 className="text-8xl m-auto w-full mb-4 text-accent font-bold">
              Are you Excited ?
            </h1>
            <p className="px-60 py-10 text-2xl font-semibold  font-poppins container w-fit leading-relaxed text-center">
              Are you ready to get prepared by your new A.I Coach ? Go ahead
              start your challenging journey with your new A.I Coach by
              selecting your subject.
            </p>
          </div>
        </div>
        <Carousel />
      </div>
    </>
  );
};
