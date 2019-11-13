import { useState } from "react";

export default function useUser() {
  const [user, setUser] = useState(localStorage.getItem("user"));

  const userActions = {
    login: function(username, password) {
      console.log("logging in");
      localStorage.setItem(
        "user",
        JSON.stringify({ id: "abc123", username, lastname: "lname" })
      );
      setUser({ id: "abc123", username, lastname: "lname" });
    },
    logout: function() {
      console.log("logging out");
      localStorage.removeItem("user");
      setUser(null);
    }
  };
  return { user, userActions };
}
