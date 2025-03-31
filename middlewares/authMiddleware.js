import {useEffect} from 'react';
import {decryptJWT} from "../util/token";
import {checkUserCredential} from "../service/authService";
import {useRouter} from "next/navigation";

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
    const response = await checkUserCredential(payload?.id)
    if (response.status === "error") {
      router.push("/login");
    } else if (response.status === "success") {
      if (response.data.company_id) {
        localStorage.setItem("companyId", response.data.company_id)
      }
      localStorage.setItem("userFullname", response.data.fullname);
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