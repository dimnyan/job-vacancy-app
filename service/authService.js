import toast from "react-hot-toast";
import {createJWT} from "../util/token";

export async function loginService(payload) {
  try {
    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })

    const data = await response.json();
    if (!response.ok) {
      toast.error(data.message);
      return {status: "error", message: data.message};
    }
    if (data.message === "Authorized") {
      const jwt = await createJWT({id: data.data.user_id});
      localStorage.setItem("token", jwt);
      return {status: "success", message: data.message};
    }
  } catch (e) {
    toast.error(e)
    console.error(e)
    return {status: "error", message: e};
  }
}

export async function registerApplicantService(payload) {
  try {
    const response = await fetch("/api/auth/register/applicant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })

    const data = await response.json()
    if (!response.ok) {
      toast.error(data.message);
      return {status: "error", message: data.message};
    }
    toast.success(data.message);
    return {status: "success", message: "Successfully register applicant"};
  } catch (error) {
    console.error(error)
  }
}

export async function registerRecruiterService(payload) {
  try {
    console.log(payload);
    const response = await fetch("/api/auth/register/recruiter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload)
    })

    const data = await response.json()
    if (!response.ok) {
      toast.error(data.message);
      return {status: "error", message: data.message};
    }
    toast.success(data.message);
    return {status: "success", message: "Successfully register recruiter"};
  } catch (error) {
    console.error(error)
  }
}

export async function checkUserCredential(id) {
  try {
    const response = await fetch(`/api/user/${id}`)
    const data = await response.json()
    let profile = {}
    if (data.data.user.role_id === 2) {
      profile = await getRecruiterProfile(id)
    } else if (data.data.user.role_id === 3) {
      profile = await getApplicantsProfile(id)
    }
    if (!response.ok) {
      toast.error(data.message);
      return {status: "error", message: data.message};
    }
    if (!data.message) {
      return {status: "error", message: data.message};
    }
    return {
      status: "success", data: {
        ...profile.data.user, role_id: data.data.user.role_id
      }
    };
  } catch (error) {
    console.error(error)
  }
}

async function getRecruiterProfile(id) {
  const response = await fetch(`/api/user/recruiter/${id}`)
  return await response.json()
}

async function getApplicantsProfile(id) {
  const response = await fetch(`/api/user/applicant/${id}`)
  return await response.json()
}


export function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("userFullname");
  localStorage.removeItem("companyId");
}