import React from "react";
import Form from "../../UI/Form/Form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../store/slices/userSlice";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSignIn(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div className="h-[70vh] bg-darkColor">
      <div className="flex items-center justify-center wrapper">
        <Form title={"sign in"} handleForm={handleSignIn} />
      </div>
    </div>
  );
}

export default SignIn;
