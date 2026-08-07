import { GoogleLogin } from "@react-oauth/google";
import { googleLogin } from "../services/auth";
import { useState } from "react";

function Login() {
  const [response,setResponse]=useState<any>(null);
  const handleSuccess = async (credentialResponse: any) => {
    try {
      const response = await googleLogin(credentialResponse.credential);
      console.log('response:',response.data);
      setResponse(response.data);
      localStorage.setItem('token',response.data.token)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-800">
          Login
        </h1>

        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleSuccess}
            onError={() => console.log("Login Failed")}
          />
          {response && (
            <div>
              <p className="text-black text-2xl">{response.user.name}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;