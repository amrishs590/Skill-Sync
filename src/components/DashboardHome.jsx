// src/components/DashboardHome.jsx
import React from "react";
import ProfileForm from "./ProfileForm";
import ProfileDisplay from "./ProfileDisplay";
import MatchFinder from "./MatchFinder";

const DashboardHome = ({ activeTab }) => {
  return (
    <div style={{ padding: "2rem" }}>
      {activeTab === "Profile" && (
        <>
          <ProfileForm />
          <hr style={{ margin: "2rem 0" }} />
          <ProfileDisplay />
        </>
      )}

      {activeTab === "Matches" && <MatchFinder />}
      {/* Future tabs like Chat, MySkills can go here */}
    </div>
  );
};

export default DashboardHome;



// import React from "react";
// import ProfileSection from "./ProfileSection";
// import MySkillsSection from "./MySkillsSection";
// import MatchesSection from "./MatchesSection";
// import ChatSection from "./ChatSection";
// import ProfileForm from "./ProfileForm";
// const DashboardHome = ({ activeTab }) => {
//   return (
//     <>
//       {activeTab === "Profile" && <ProfileForm />}
//       {activeTab === "Profile" && <ProfileSection />}
//       {activeTab === "My Skills" && <MySkillsSection />}
//       {activeTab === "Matches" && <MatchesSection />}
//       {activeTab === "Chat" && <ChatSection />}
//     </>
//   );
// };

// export default DashboardHome;
