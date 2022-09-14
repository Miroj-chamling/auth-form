import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState(null);
  return (
    <>
      <p>This is the home screen mother fuckers.</p>
      <p>Sign in before you have access to this page bitchhh.</p>
      <Link to="/auth">go to auth</Link>
    </>
  );
};

export default Home;
