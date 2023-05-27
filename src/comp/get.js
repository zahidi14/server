import axios from "axios";

export const jsonn = async () => {
  try {
    const response = await axios.get("http://localhost:5500/api/data/");
    return response.data;
  } catch (error) {
    console.log("goblogggg", error);
    throw error;
  }
};
