import React, { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";

const Token = () => {
  const { getToken, isSignedIn } = useAuth();
  const [token, setToken] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      if (isSignedIn) {
        try {
          const jwt = await getToken();
          setToken(jwt);
        } catch (error) {
          console.error("Error fetching token:", error);
        }
      }
    };
    fetchToken();
  }, [isSignedIn, getToken]);

  if (!isSignedIn) {
    return <p className="text-center text-red-500">⚠️ You must be signed in to see your token.</p>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🔑 Your Clerk Token</h1>
      {token ? (
        <textarea
          className="w-full p-3 border rounded-lg bg-gray-100 text-sm font-mono"
          rows={8}
          value={token}
          readOnly
        />
      ) : (
        <p>Loading token...</p>
      )}
    </div>
  );
};

export default Token;