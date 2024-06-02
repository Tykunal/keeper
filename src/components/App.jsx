import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [arr, setArr] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  function deleteNote(id) {
    setArr((prevVal) => {
      return prevVal.filter((note, index) => {
        return index != id;
      });
    });
  }
  function handleTitleChange(event) {
    let newValue = event.target.value;
    setTitle(newValue);
  }
  function handleDescChange(event) {
    let newValueDesc = event.target.value;
    setDesc(newValueDesc);
  }

  function handleClick(event) {
    event.preventDefault();
    setArr((prevValues) => [
      ...prevValues,
      {
        title: title,
        description: desc,
      },
    ]);
    setTitle("");
    setDesc("");
  }
  return (
    <div>
      <Header />
      <CreateArea
        titleVal={title}
        descVal={desc}
        descChange={handleDescChange}
        titleChange={handleTitleChange}
        click={handleClick}
      />
      {arr.map((item, index) => (
        <Note
          id={index}
          btnClick={deleteNote}
          key={index}
          title={item.title}
          content={item.description}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
