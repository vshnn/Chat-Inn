
import { useState,useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import usePostProfileChanges from "../../hooks/usePostProfileChanges";
import {toast} from "react-hot-toast";


const ProfilePage = () => {
  const { authUser } = useAuthContext();
  const [fullName, setFullName] = useState(authUser.fullName);
  const [username, setUsername] = useState(authUser.username);
  const [password, setPassword] = useState("");

  const [changes, setChanges] = useState(null);

  const postProfileChangesResult = usePostProfileChanges(authUser._id, changes, authUser.profilePic);

  console.log(authUser._id);

  useEffect(() => {
    if (postProfileChangesResult.error) {
      // handle error
    } else if (postProfileChangesResult) {
      // handle success
    }
  }, [postProfileChangesResult]);

  const handleChanges = (e) => {
    e.preventDefault();
    setChanges({
      fullName: fullName,
      username: username,
      password: password,
    });
    toast.success("Profile updated successfully");
  };

  return (
    <div className="container mx-auto">
      <div className="w-full max-w-md mx-auto rounded-lg shadow-md px-6">
        <h2 className="text-2xl font-semibold text-center">Edit Profile</h2>

        <form onSubmit={handleChanges}>
          <div className="w-12 rounded-full mx-auto mt-3">
            <img src={authUser.profilePic} alt="user avatar" />
          </div>
          <div className="font-bold text-white text-center text-xl pt-2">{authUser.fullName}</div>
  
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder={authUser.fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              placeholder={authUser.username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="label">
              <span className="text-base label-text">New Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              onChange={(e) => setPassword(e.target.value)}

            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="btn btn-block btn-sm border border-gray-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
