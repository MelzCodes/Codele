import React from "react";
import { UserProfile } from "@clerk/nextjs";

const ProfilePage = () => {
  return (
    <div
      style={{
        backgroundColor: "rgb(25, 25, 26)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <UserProfile />
    </div>
  );
};

export default ProfilePage;
