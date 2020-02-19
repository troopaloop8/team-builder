import React from "react";

const Team = props => {
  return (
    <div className="member-list">
      {props.members.map(member => (
        <div className="member" key={member.id}>
          <h2>{member.name}</h2>
          <p>{member.email}</p>
          <p>{member.class}</p>
          <p>{member.level}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;