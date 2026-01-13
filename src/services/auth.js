import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/user";

// export function setToken(newToken){
//  let token = newToken;
//  return token;
// }

export async function signIn(userData) {
  try {
    const data = await axios.post(`${API_URL}/login`, userData, {
      headers: {
        "Content-Type": "",
      },
    });
    localStorage.setItem("tokenAuth", data.data.user.token);
    return data.data.user;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function signUp({ name, login, password }) {
  try {
    const data = await axios.post(
      API_URL,
      { login, name, password },
      {
        headers: {
          "Content-Type": "",
        },
      }
    );
    return data.data.user;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

export async function getUsers() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        "Content-Type": "",
      },
    });
    return response.data.users;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error("Ошибка при получении списка пользователей");
  }
}
