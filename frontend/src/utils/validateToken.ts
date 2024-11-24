import axios from "axios";

export const validateToken = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }
  try {
    const response = await axios(
      "http://localhost:3000/api/v1/validate-token",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};
