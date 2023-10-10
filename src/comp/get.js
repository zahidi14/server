import axios from "axios";

export const fetc = async () => {
  try {
    const response = await axios.get(
      "https://comment-backend-three.vercel.app/data"
    );
    return response.data;
  } catch (error) {
    console.log("goblogggg", error);
    throw error;
  }
};
