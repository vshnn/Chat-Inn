import { useEffect, useState } from "react";

const usePostProfileChanges = (userId, data, avatar) => {
  const [changes, setChanges] = useState({});

  useEffect(() => {
    const postChanges = async () => {
      try {
        const res = await fetch(`/api/users/${userId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result = await res.json();
        if (result.error) {
          throw new Error(result.error);
        }
        localStorage.setItem("chat-user", JSON.stringify(
          {
            _id: userId,
            fullName: data.fullName,
            username: data.username,
            profilePic: avatar,
          }
        ));
        window.location.reload();
        setChanges(result);
      } catch (error) {
        setChanges({ error: error.message });
      }
    };

    postChanges();
  }, [userId, data]);

  return changes;
};


export default usePostProfileChanges;

