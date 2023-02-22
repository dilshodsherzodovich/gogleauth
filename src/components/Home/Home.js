import React, { useEffect, useState } from "react";
import { auth, provider } from "../../config";
import { signInWithPopup } from "firebase/auth";
import Login from "../Login/Login";

function Home(props) {
  const [value, setValue] = useState("");

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data);
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);

  return (
    <div>
      {value ? (
        <div>
          <h1>Home page</h1>
          <button
            onClick={() => {
              localStorage.clear();
              setValue("");
            }}
            class=" text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Log out
          </button>
        </div>
      ) : (
        <Login handleClick={handleClick} />
      )}
    </div>
  );
}

export default Home;
