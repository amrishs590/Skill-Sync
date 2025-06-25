import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./ProfileForm.css";

const ProfileForm = () => {
  const [name, setName] = useState("");
  const [teach, setTeach] = useState([]);
  const [learn, setLearn] = useState([]);
  const [inputTeach, setInputTeach] = useState("");
  const [inputLearn, setInputLearn] = useState("");

  const handleAddSkill = (type) => {
    if (type === "teach" && inputTeach.trim()) {
      setTeach([...teach, inputTeach.trim()]);
      setInputTeach("");
    } else if (type === "learn" && inputLearn.trim()) {
      setLearn([...learn, inputLearn.trim()]);
      setInputLearn("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data: user } = await supabase.auth.getUser();
    const userId = user?.user?.id;

    if (!userId) return alert("Not logged in");

    const { error } = await supabase
      .from("profiles")
      .upsert({ id: userId, name, teach_skills: teach, learn_skills: learn });

    if (error) {
      alert("Error saving profile");
    } else {
      alert("Profile saved!");
    }
  };

  return (
    <form className="profile-form" onSubmit={handleSubmit}>
      <h2>Set Up Your Profile</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <div className="skill-section">
        <label>Skills You Can Teach:</label>
        <div className="tags">
          {teach.map((skill, i) => (
            <span key={i}>{skill}</span>
          ))}
        </div>
        <input
          type="text"
          placeholder="Add skill & press Enter"
          value={inputTeach}
          onChange={(e) => setInputTeach(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddSkill("teach")}
        />
      </div>

      <div className="skill-section">
        <label>Skills You Want to Learn:</label>
        <div className="tags">
          {learn.map((skill, i) => (
            <span key={i}>{skill}</span>
          ))}
        </div>
        <input
          type="text"
          placeholder="Add skill & press Enter"
          value={inputLearn}
          onChange={(e) => setInputLearn(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddSkill("learn")}
        />
      </div>

      <button type="submit">Save Profile</button>
    </form>
  );
};

export default ProfileForm;
