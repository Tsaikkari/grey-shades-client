import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [profile, setProfile] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setProfile(prevProfile => {
      return {
        ...prevProfile,
        [name]: value
      };
    });
  }

  function submitProfile(event) {
    props.onAdd(profile);
    setProfile({
      title: "",
      content: ""
    }); 
    event.preventDefault();
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-profile">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={profile.title}
            placeholder="Title"
          />
        )}
        <textarea
          onClick={expand}
          name="content"
          onChange={handleChange}
          value={profile.content}
          placeholder="Description..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitProfile}><AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
