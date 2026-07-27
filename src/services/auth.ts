import axios from "axios";

const API = "http://localhost:5000/api";//backend URL

export const googleLogin = async (token: string) => {
  return await axios.post(`${API}/auth/google`, {
    token,
  });
};