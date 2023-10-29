import { Navbar } from "../ui/Navbar.jsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../services/supabase.js";

export const Hero = () => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    (async () => {
      const { data: user } = await supabase.auth.getUser();
      if (user.user == null) setUser(false);
      else setUser(true);
    })();
  }, []);

  return (
    <>
      <Navbar />
      <div className="pt-16 pr-0 pl-0 pb-8">
        <div className="max-w-7xl my-0 mx-auto py-0 px-3.5 grid grid-cols-2 items-center gap-24">
          <div className="px-4">
            <h1 className="text-7xl cursor-pointer font-poppins font-extrabold mb-6 decoration-pink-500">
              Welcome to Job Prep!
            </h1>
            <p className="text-white mt-6 font-poppins text-xl opacity-70 leading-10">
              Your Ultimate Interview Success Partner! JobPrep is your go-to
              online resource for interview preparation and career advancement.{" "}
            </p>
            <p className="text-white transition-all font-poppins text-xl opacity-70 leading-10 decoration-inherit mb-12">
              With our AI-driven tools and expert guidance, we'll help you excel
              in interviews, land your dream job, and take your career to the
              next level.
            </p>
            <Link
              to={"/exercises"}
              className="border p-3 text-lg font-semibold transition-all duration-300 text-gray-300 hover:text-white rounded-xl border-indigo-800 hover:bg-indigo-800"
            >
              Explore now
            </Link>
          </div>
          <div>
            <img
              src="/hero2.jpg"
              alt={"hero image"}
              className={"h-full w-full z-10 rounded-3xl "}
            />
          </div>
        </div>
      </div>
    </>
  );
};
