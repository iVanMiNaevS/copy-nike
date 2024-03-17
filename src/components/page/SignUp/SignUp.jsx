import React from "react";
import Form from "../../UI/Form/Form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleSignUp(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
        <Form title={"sign up"} handleForm={handleSignUp} />
      </div>
    </div>
  );
}

export default SignUp;
