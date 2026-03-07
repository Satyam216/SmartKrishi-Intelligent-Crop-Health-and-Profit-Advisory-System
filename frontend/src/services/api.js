import { auth } from "../firebase/firebase";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5000/api"
    : `${import.meta.env.VITE_BACKEND_URL}/api`;

export const apiRequest = async (endpoint, options = {}) => {
  try {
    const user = auth.currentUser;
    let token = null;

    if (user) {
      token = await user.getIdToken();
    }

    const headers = {
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers
    };

    // ❗ Content-Type सिर्फ JSON request में लगाओ
    if (!(options.body instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }

    const response = await fetch(`${BASE_URL}${endpoint}`, {
      ...options,
      headers
    });

    if (!response.ok) {
      throw new Error("API request failed");
    }

    return await response.json();

  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};