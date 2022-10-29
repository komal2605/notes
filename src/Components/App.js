import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

export default function App() {
  const [notes, setNotes] = useState([]);

  function addNote(text) {
    setNotes((preVal) => {
      return [...preVal, text];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((eachNote, index) => {
        return (
          <Note
            id={index}
            key={index}
            title={eachNote.title}
            content={eachNote.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}
