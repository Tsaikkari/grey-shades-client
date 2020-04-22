import React, { useState } from "react";
import Screens from "./Screens";
import Header from "./Header";
import Profile from "./Profile";
import CreateArea from "./CreateArea";

function App() {

  const [profiles, setProfiles] = useState([]);

  function addProfile(newProfile) {
    setProfiles(prevProfiles => {
      return [...prevProfiles, newProfile];
    });
  }

  function deleteProfile(id) {
    setProfiles(prevProfiles => {
      return prevProfiles.filter((profileItem, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div>
      <Screens />
      <Header />
      <CreateArea onAdd={addProfile} />
      {profiles.map((profileItem, index) => {
        return <Profile
        key={index}
        id={index}
        title={profileItem.title}
        content={profileItem.content}
        onDelete={deleteProfile}
        />
      })}
    </div>
  );
}

export default App;
