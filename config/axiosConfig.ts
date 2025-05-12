import axios from "axios";

// Global axios defaults
axios.defaults.baseURL = "https://api.example.com";
axios.defaults.headers.common["Authorization"] = "Bearer YOUR_AUTH_TOKEN";
axios.defaults.headers.post["Content-Type"] = "application/json";

// Create an Axios instance with custom defaults
const apiInstance = axios.create({
  baseURL: "https://api.example.com",
  timeout: 2500, // Default timeout
});

// Alter defaults after instance has been created
apiInstance.defaults.headers.common["Authorization"] = "Bearer YOUR_AUTH_TOKEN";

// Response & Error Handling
apiInstance.interceptors.response.use(
  (response) => response, // Return response directly if successful
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default apiInstance;
