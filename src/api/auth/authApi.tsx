import { LOGIN_URL, REGISTER_URL } from "../api-urls";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const loginUser = async (email : string, password : string ) => {
  try {
    const response = await fetch(`${BASE_URL}${LOGIN_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const registerUser = async (username : string,email : string,password : string,mobile : number ,role : string) => {
  try {
    const response = await fetch(`${BASE_URL}${REGISTER_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password, mobile, role }),
    });

    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
