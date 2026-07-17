import { GoogleLogin } from "@react-oauth/google";
import { googleLogin } from "../services/auth";

function Login() {
  const handleSuccess = async (credentialResponse: any) => {
    try {
      const response = await googleLogin(credentialResponse.credential);

      console.log(response.data);
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
        </div>
      </div>
    </div>
  );
}

export default Login;