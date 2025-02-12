'use client'
import Link from "next/link";
import {useState} from "react";
import Button from "@/components/basic/Button";
import Input from "@/components/basic/Input";
import {loginService} from "../../../service/authService";
import {useRouter} from "next/navigation";


const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  })
  const router = useRouter()
  const handleChangeInputs = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const handleLogin = async () => {
    setLoading(true)
    const result = await loginService(inputs)
    setLoading(false)
    if (result.status === "success") {
      router.push("/admin")
    }
  }

  return (
    <>
      <div className="space-y-2 py-5 mb-7">
        <h1 className="text-3xl font-semibold">Login</h1>
        <p className="text-sm text-slate-500">Welcome back. Enter your username and password to enter</p>
      </div>
      <div className="my-auto">
        <Input
          type={"text"}
          name={"username"}
          label={"Username"}
          value={inputs.username}
          changeValue={handleChangeInputs}
        />
        <Input
          type={"password"}
          name={"password"}
          label={"Password"}
          value={inputs.password}
          changeValue={handleChangeInputs}
        />
        <div onClick={handleLogin} className="w-fit">
          <Button loading={loading}>Login</Button>
        </div>
        <div className="text-sm text-center mt-32 text-slate-500">Don't have an account?{" "}
          <Link className="underline text-slate-900" href="/login/register">Register</Link>
        </div>
      </div>
    </>
  );
};

export default LoginPage;