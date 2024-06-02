import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  function expand(){
    setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={props.titleChange}
            value={props.titleVal}
            placeholder="Title"
          />
        )}
        <textarea onClick={expand}
          value={props.descVal}
          onChange={props.descChange}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded?3:1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={props.click}><AddIcon /></Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
