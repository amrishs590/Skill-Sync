import React from "react";
import "../styles/Sidebar.css";

const Sidebar = ({ active, setActive }) => {
  const links = ["Profile", "My Skills", "Matches", "Chat"];

  return (
    <aside className="sidebar">
      <h2 className="logo">SkillSync</h2>
      <ul className="sidebar-links">
        {links.map((item) => (
          <li
            key={item}
            className={active === item ? "active" : ""}
            onClick={() => setActive(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
