import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./ProfileDisplay.css";

const ProfileDisplay = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: user } = await supabase.auth.getUser();
      const userId = user?.user?.id;
      if (!userId) return;

      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", userId)
        .single();

      if (!error) setProfile(data);
      setLoading(false);
    };

    fetchProfile();
  }, []);

  if (loading) return <p>Loading profile...</p>;
  if (!profile) return <p>No profile found.</p>;

  return (
    <div className="profile-display">
      <h2>Hello, {profile.name} 👋</h2>

      <div className="skill-box">
        <h4>Skills You Can Teach:</h4>
        {profile.teach_skills?.length > 0 ? (
          <ul>
            {profile.teach_skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p>No skills listed yet</p>
        )}
      </div>

      <div className="skill-box">
        <h4>Skills You Want to Learn:</h4>
        {profile.learn_skills?.length > 0 ? (
          <ul>
            {profile.learn_skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        ) : (
          <p>No skills listed yet</p>
        )}
      </div>
    </div>
  );
};

export default ProfileDisplay;
