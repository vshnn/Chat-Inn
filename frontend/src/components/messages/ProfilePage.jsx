import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const { authUser } = useAuthContext();

  return (
    <div className="container mx-auto p-6">
      <div className="w-full max-w-md mx-auto rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold text-center">Edit Profile</h2>

        <form>
          <div className="w-12 rounded-full mx-auto mt-3">
            <img src={authUser.profilePic} alt="user avatar" />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              value={authUser.fullName}
            />
          </div>

          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              className="w-full input input-bordered h-10"
              value={authUser.username}
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
