import {useEffect} from 'react';
import {decryptJWT} from "../util/token";
import {checkUserCredential} from "../service/authService";
import {useRouter} from "next/navigation";
import {STATUS_OK} from "../lib/constant";

const AuthMiddleware = ({children}) => {
  const token = localStorage.getItem("token")
  const router = useRouter();

  const checkCreds = async () => {
    // decode jwt
    const {payload, protectedHeader} = await decryptJWT(token)
    if (!payload) {
      router.push("/login")
    }

    // check user id
    const response = await checkUserCredential(payload.id)
    if (response.status === "error") {
      router.push("/login");
    }
  }

  useEffect(() => {
    checkCreds()
  }, []);

  return (
    <>
      {children}
    </>
  );
};

export default AuthMiddleware;