import React, { useState } from "react";

const NoteItem = ({ note, setNotes }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(note.title);
  const [editContent, setEditContent] = useState(note.content);

  const handleDelete = () => {
    setNotes((prevNotes) => prevNotes.filter((n) => n.id !== note.id));
  };

  const handleSave = () => {
    setNotes((prevNotes) =>
      prevNotes.map((n) => (n.id === note.id ? { ...n, title: editTitle, content: editContent } : n))
    );
    setIsEditing(false);
  };

  return (
    <div className="bg-white p-4 rounded shadow-md  ">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            className="border p-2 w-full rounded mb-2 "
          />
          <textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            className="border p-2 w-full rounded mb-2"
          />
          <button onClick={handleSave} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 mr-2">
            Save
          </button>
          <button onClick={() => setIsEditing(false)} className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-600">
            Cancel
          </button>
        </>
      ) : (
        <>
          <h3 className="text-lg font-bold">{note.title}</h3>
          <p className="text-gray-600">{note.content}</p>
          <div className="mt-3">
            <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 mr-2">
              Edit
            </button>
            <button onClick={handleDelete} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default NoteItem;
