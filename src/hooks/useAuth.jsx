import { useSelector } from "react-redux";

export function useAuth() {
  const { email, token, id } = useSelector((store) => store.user);

  return {
    isAuth: !!email,
    email: email,
    token: token,
    id: id,
  };
}
