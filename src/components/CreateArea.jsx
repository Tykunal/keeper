import React, { useState } from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          name="title"
          onChange={props.titleChange}
          value={props.titleVal}
          placeholder="Title"
        />
        <textarea
          value={props.descVal}
          onChange={props.descChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={props.click}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;