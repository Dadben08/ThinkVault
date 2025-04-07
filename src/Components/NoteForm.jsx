import React, { useState } from "react";

const NoteForm = ({ setNotes }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAddNote = () => {
    if (title.trim() === "" || content.trim() === "") return;

    const newNote = {
      id: Date.now(),
      title,
      content,
    };

    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes, newNote];
      localStorage.setItem("notes", JSON.stringify(updatedNotes)); // Ensure immediate save
      return updatedNotes;
    });

    setTitle("");
    setContent("");
  };

  return (
    <div className="bg-white p-4 rounded shadow-md mb-6">
      <input
        type="text"
        placeholder="Note Title"
        className="border border-gray-300 p-2 w-full rounded mb-2 text-black"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write your note..."
        className="border p-2 w-full rounded mb-2 border-gray-300 text-black"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        onClick={handleAddNote}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Note
      </button>
    </div>
  );
};

export default NoteForm;
