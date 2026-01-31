import axios from "axios";

const API_URL = "https://wedev-api.sky.pro/api/kanban";
export async function fetchTasks({ token }) {
  try {
    const data = await axios.get(API_URL, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const postTask = async (token, task) => {
  try {
    const response = await axios.post(API_URL, task, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "",
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
};

// export async function postTask({ token, task }) {
//   console.log(task);

//   try {
//     const data = await axios.post(API_URL, task, {
//       headers: {
//         // Authorization: "Bearer " + token,
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "",
//       },
//     });
//     console.log(data);
//     return data.data.tasks;
//   } catch (error) {
//     console.log("774");
//     throw new Error(error.message);
//   }
// }

export async function editTask({ token, id, task }) {
  try {
    const data = await axios.patch(`${API_URL}/${id}`, task, {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "text/html",
      },
    });
    return data.data.tasks;
  } catch (error) {
    throw new Error(error.message);
  }
}
