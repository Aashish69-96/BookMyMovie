import { useState } from "react";

const useAuth = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const auth = async (token) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "http://localhost:3000/api/customers/checkauth",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const responseData = await response.json();
      if (!response.ok) {
        setIsLoading(false);
        setError(responseData.msg);
        return false;
      }
      setIsLoading(false);
      setError(null);
      return true;
    } catch (error) {
      setIsLoading(false);
      setError("An error occurred while authenticating.");
      return false;
    }
  };
  return { auth, error, isLoading };
};

export default useAuth;
