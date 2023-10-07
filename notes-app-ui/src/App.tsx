// src/App.tsx

import React, { useState } from "react";
import "./App.css";

interface Note {
  id: number;
  title: string;
  content: string;
}

const App = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "test note 1",
      content: "bla bla note1",
    },
    {
      id: 2,
      title: "test note 2",
      content: "bla bla note2",
    },
    // Add more dummy notes here
  ]);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = (event: React.FormEvent) => {
    event.preventDefault();
    const newNote: Note = {
      id: notes.length + 1,
      title: title,
      content: content,
    };
    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="app-container">
      <form className="note-form" onSubmit={handleAddNote}>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Content"
          rows={10}
          required
        />
        <button type="submit">Add Note</button>
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div key={note.id} className="note-item">
            <div className="notes-header">
              <button>x</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
