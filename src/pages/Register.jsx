import { Link } from "react-router-dom";
import { signInWithGitHub, signup } from "../services/apiAuth.js";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await signup({ fullName: name, email, password });
    if (data) {
      alert("Registered successfully");
    }
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleGithubRegister = async () => {
    const { data } = await signInWithGitHub();
    if (data) {
      alert("Registered successfully");
    }
  };

  return (
    <div className={"flex flex-col items-center  justify-center"}>
      <h1 className={"text-5xl mt-16 mb-16 font-roboto"}>
        <span className={"flex gap-5"}>
          <img alt={"logo"} className={"h-16 rounded-full"} src={"/logo.png"} />
          <Link
            to={"/"}
            className={
              "font-poppins font-bold text-6xl hover:duration-400 transition-all"
            }
          >
            JobPrep
          </Link>
        </span>
      </h1>
      <div
        className={
          "max-w-2xl p-2 border flex border-slate-700 container mb-6 rounded-lg"
        }
      >
        <div className="p-6 space-y-4 m-auto  md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold font-poppins leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign up for a new account
          </h1>
          <form onSubmit={handleSubmit}>
            <div className={"flex flex-col gap-2 mb-3"}>
              <label>Name</label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className={"flex flex-col gap-2 mb-3"}>
              <label>Email</label>
              <input
                type="email"
                placeholder="name@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className={"flex flex-col gap-2 mb-6"}>
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className={"flex "}></div>
            <button className={" btn btn-accent btn-outline mx-1  "}>
              Submit
            </button>
            <div
              onClick={handleGithubRegister}
              className={"mx-6 btn btn-outline"}
            >
              <BsGithub />
              Sign in with github
            </div>
          </form>
        </div>
      </div>
      <Link
        className={`text-sm  ${
          theme === "light" ? "hover:text-black" : "hover:text-white"
        } transition-all   `}
        to={"/login"}
      >
        Already have an account ?
      </Link>
    </div>
  );
};
