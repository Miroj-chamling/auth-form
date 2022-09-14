import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../../constants/reducerActionTypers";

const Home = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logoutHandler = () => {
    dispatch({ type: ActionTypes.LOGOUT });
    setUser(null);
    navigate("/auth");
  };

  return (
    <div>
      {user ? (
        <>
          <img
            style={{
              borderRadius: "50px",
              height: 50,
              width: 50,
              border: "1px solid black",
            }}
            src={user?.response.imageUrl}
            alt={user?.response.name.charAt(0)}
          />
          <h4> 👨‍💻 {user.response.name} </h4>
          <h5>✉️ {user.response.email}</h5>
          <p>
            Welcome, {user.response.name} have succesfully logged in brother. 🍺
          </p>
          <p>Wanna logout? 🥲</p>
          <button onClick={logoutHandler}>Logout</button>
        </>
      ) : (
        <>
          <p>This is the home screen motherfuckers.</p>
          <p>Sign in before you have access to this page bitchhh.</p>
          <Link to="/auth">go to auth</Link>
        </>
      )}
    </div>
  );
};

export default Home;
