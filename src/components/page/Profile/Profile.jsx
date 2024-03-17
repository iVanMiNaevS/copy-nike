import React from "react";
import MyButtonLink from "../../UI/MyButton-Link/MyButtonLink";
import { useAuth } from "../../../hooks/useAuth";
import MyButton from "../../UI/MyButton/MyButton";
import { useDispatch } from "react-redux";
import { removeUser } from "../../../store/slices/userSlice";
import styles from "./profile.module.css";
function Profile() {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();
  return (
    <div className="h-[80vh] pt-10 bg-darkColor">
      <div className="wrapper">
        {isAuth === true ? (
          <>
            <h2 className="mb-5 text-2xl text-white">Email: {email}</h2>
            <MyButton
              onClick={() => {
                dispatch(removeUser());
              }}
            >
              Log Out
            </MyButton>
          </>
        ) : (
          <div className={styles.myWrapper}>
            <h1>Choose What You Want</h1>
            <div className={styles.choice}>
              <div className={styles.buttonsReg}>
                <MyButtonLink
                  to={"/sign up"}
                  stylesOut={"text-xl hover:bg-slate-500 transition"}
                >
                  Sign Up
                </MyButtonLink>
                <MyButtonLink
                  to={"/sign in"}
                  stylesOut={"text-xl hover:bg-slate-500 transition"}
                >
                  Sign In
                </MyButtonLink>
              </div>
              <div className={styles.toCatalog}>
                <MyButtonLink
                  to={"/shoes"}
                  stylesOut={"text-xl hover:bg-slate-500 transition"}
                >
                  To The Catalog
                </MyButtonLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
