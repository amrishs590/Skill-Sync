import React, { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import "./MatchFinder.css";

const MatchFinder = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const findMatches = async () => {
      const { data: user } = await supabase.auth.getUser();
      const userId = user?.user?.id;

      const { data: myProfile } = await supabase
        .from("profiles")
        .select("learn_skills")
        .eq("id", userId)
        .single();

      if (!myProfile?.learn_skills?.length) {
        setMatches([]);
        setLoading(false);
        return;
      }

      // Fetch all other profiles
      const { data: others } = await supabase
        .from("profiles")
        .select("id, name, teach_skills")
        .neq("id", userId);

      const matchList = others.filter((profile) =>
        profile.teach_skills?.some((skill) =>
          myProfile.learn_skills.includes(skill)
        )
      );

      setMatches(matchList);
      setLoading(false);
    };

    findMatches();
  }, []);

  if (loading) return <p>Loading matches...</p>;

  return (
    <div className="match-finder">
      <h2>People Who Can Teach You 👩‍🏫</h2>
      {matches.length === 0 ? (
        <p>No matches found. Try adding more skills.</p>
      ) : (
        <ul>
          {matches.map((person) => (
            <li key={person.id}>
              <strong>{person.name}</strong> — can teach:{" "}
              {person.teach_skills.join(", ")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MatchFinder;
