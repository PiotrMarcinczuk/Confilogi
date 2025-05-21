import { useState, useEffect } from "react";

export default function JoinedCount() {
  const [usersCount, setUsersCount] = useState<string>("35.000");
  useEffect(() => {
    const startCount = 35000;
    const intervalTime = 20000 / 50;
    let current = startCount;
    const decrement = Math.ceil(startCount / 50);
    const intervalId = setInterval(() => {
      current -= decrement;
      if (current <= 0) {
        current = 0;
        clearInterval(intervalId);
      }
      setUsersCount(current.toLocaleString("de-DE"));
    }, intervalTime);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <p className="users-count">
      {usersCount} {usersCount !== "0" ? "+" : ""} ALREADY JOINED
    </p>
  );
}
