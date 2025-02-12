'use client'
import {useState} from 'react';
import Input from "@/components/basic/Input";
import Button from "@/components/basic/Button";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {registerApplicantService, registerRecruiterService} from "../../../../service/authService";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formSelection, setFormSelection] = useState(0);
  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    username: "",
    phone_number: "",
    field_of_work: "",
    password: "",
    company_name: "",
  })
  const handleChangeInputs = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }

  const handleRegisterAsApplicant = async () => {
    setLoading(true);
    let result = {}
    if (formSelection === 0) {
      result = await registerApplicantService(inputs)
    } else if (formSelection === 1) {
      result = await registerRecruiterService(inputs)
    }
    setLoading(false);
    if (result.status === "success") {
      router.push("/login")
    }
  }

  return (
    <>
      <div className="space-y-2 py-5 mb-7">
        <h1 className="text-3xl font-semibold">Create an Account</h1>
      </div>
      {/*<p className="font-semibold text-center">Create as</p>*/}
      <div className="flex justify-between mb-2">
        <button onClick={() => setFormSelection(0)}
                className={`w-[47%] btn ${formSelection === 0 ? 'text-slate-200' : 'btn-outline text-slate-800 bg-slate-300'} `}>Applicant
        </button>
        <button onClick={() => setFormSelection(1)}
                className={`w-[47%] btn ${formSelection === 1 ? 'text-slate-200' : 'btn-outline text-slate-800 bg-slate-300'} `}>Recruiter
        </button>
      </div>
      <div>
        <Input
          type={"text"}
          name={"fullname"}
          label={"Full name"}
          value={inputs.fullname}
          changeValue={handleChangeInputs}
        />
        <Input
          type={"email"}
          name={"email"}
          label={"Email"}
          value={inputs.email}
          changeValue={handleChangeInputs}
        />
        <Input
          type={"phone"}
          name={"phone_number"}
          label={"Phone Number"}
          value={inputs.phone_number}
          changeValue={handleChangeInputs}
        />
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
        {formSelection === 0 && (
          <>
            <div className="label">
          <span className="label-text text-slate-900">
          Field of work
          </span>
            </div>
            <select className="select border-slate-400/50 bg-slate-300" name="field_of_work"
                    value={inputs.field_of_work}
                    onChange={handleChangeInputs}>
              <option disabled value="">Select One</option>
              <option value="Finance">Finance</option>
              <option value="HR">Human Resource</option>
              <option value="IT">Information Technology</option>
            </select>
          </>
        )}
        {formSelection === 1 && (
          <>
            <Input
              type={"company"}
              name={"company_name"}
              label={"Company Name"}
              value={inputs.company_name}
              changeValue={handleChangeInputs}
            />
          </>
        )}
        <div onClick={handleRegisterAsApplicant} className="w-fit">
          <Button loading={loading}>Register</Button>
        </div>
        <div className="text-sm text-center mt-20 text-slate-500">Already have an account?{" "}
          <Link className="underline text-slate-900" href="/login">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Page;