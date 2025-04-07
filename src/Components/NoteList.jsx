import React from "react";
import NoteItem from "./NoteItem";

const NoteList = ({ notes, setNotes }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {notes.length > 0 ? (
        notes.map((note) => <NoteItem key={note.id} note={note} setNotes={setNotes} />)
      ) : (
        <p className="text-gray-500 text-center col-span-3">No notes yet. Add one!</p>
      )}
    </div>
  );
};

export default NoteList;
