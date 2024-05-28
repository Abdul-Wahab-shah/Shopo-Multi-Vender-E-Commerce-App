import React from "react";
import Header from "../Components/Layout/Header";
import ProfileSidebar from "../Components/Profile/ProfileSidebar";
import ProfileContent from "../Components/Profile/ProfileContent";
import styles from "../Styles/styles";

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <div className={`${styles.section} flex bg-[#f5f5f5] py-10`}>
        <div className="w-[335px]">
          <ProfileSidebar />
        </div>
        <ProfileContent />
      </div>
    </div>
  );
};

export default ProfilePage;
