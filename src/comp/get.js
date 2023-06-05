import axios from "axios";

export const fetc = async () => {
  try {
    const response = await axios.get(
      "https://comment-backend-ntb78k2xb-zahidi14.vercel.app/comments/"
    );
    return response.data;
  } catch (error) {
    console.log("goblogggg", error);
    throw error;
  }
};
