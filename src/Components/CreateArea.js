import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
  const [checked, setChecked] = useState(false);

  const [text, setText] = useState({
    title: "",
    content: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;
    setText((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  }

  function handleClick(e) {
    e.preventDefault();
    if (text.title === "" || text.content === "") {
      alert("Oops you forgot adding text...");
    } else {
      props.onAdd(text);
      setText({
        title: "",
        content: "",
      });
    }
  }

  function isChecked() {
    setChecked(true);
  }

  return (
    <div>
      <form className="create-note">
        {checked ? (
          <input
            onChange={handleChange}
            value={text.title}
            name="title"
            placeholder="Title"
            autoFocus
          />
        ) : null}
        <textarea
          onClick={isChecked}
          onChange={handleChange}
          value={text.content}
          name="content"
          placeholder="Take a note..."
          rows={checked ? "3" : "1"}
        />
        <Zoom
          in={checked}
          style={{ transitionDelay: checked ? "100ms" : "0ms" }}
        >
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
