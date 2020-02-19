import React, { useState } from "react";
import "./App.css";
import data from "./data";
import Members from "./components/Members";
import Form from "./components/Form";

function App(props) {
  const [teamList, setTeamList] = useState([
    ...data
  ]);
  console.log(data);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      class: member.class,
      level: member.level
    };
    setTeamList([...teamList, newMember])
  }
  return (
    <div>
      <h1>Dungeons and Dragons Team Builder</h1>
      <div>
        <Form addNewMember={addNewMember} />
        <Members members={teamList} />
      </div>
    </div>
  );
}

export default App;



