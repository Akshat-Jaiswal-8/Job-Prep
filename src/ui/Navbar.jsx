import { Link } from "react-router-dom";
import "react-lazy-load-image-component/src/effects/blur.css";
import { supabase } from "../services/supabase.js";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async () => {
      const { data: user } = await supabase.auth.getUser();
      setUser(user.user);
    })();
  }, [user]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    window.location.reload();
    if (error) {
      alert(error.message);
      throw new Error(error.message);
    }
  };

  return (
    <nav
      className="mx-20 my-6 border-gray-600 shadow-indigo-500/40
     rounded-3xl shadow-xl"
    >
      <div className="flex justify-between">
        <Link to={"/"} className="text-3xl inline-flex items-center m-4">
          <span>
            <img alt={"logo"} className={"h-16"} src={"/logo.png"} />
          </span>
          <span className={"font-bold font-poppins"}>Job Prep</span>
        </Link>
        <div className="flex items-center mr-10">
          {user == null ? (
            <div className="inline-flex group text-lg gap-5 ">
              <Link
                to={"/register"}
                className="hover:bg-indigo-800 hover:text-white text-gray-300 font-semibold rounded-xl p-3 transition-all duration-300"
              >
                Register
              </Link>
              <Link
                to={"/login"}
                className="hover:bg-indigo-800 hover:text-white text-gray-300 font-semibold rounded-xl p-3 transition-all duration-300"
              >
                Login
              </Link>
            </div>
          ) : (
            <button
              className="hover:bg-indigo-800 hover:text-white text-gray-300 font-semibold rounded-xl p-3 transition-all duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
