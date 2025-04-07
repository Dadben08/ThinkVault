import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import NoteForm from "./Components/NoteForm";
import NoteList from "./Components/NoteList";
import Footer from "./Components/Footer"; // 👉 Add this line

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showNotes, setShowNotes] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-100">
      {!showNotes ? (
        <HeroSection onStart={() => setShowNotes(true)} />
      ) : (
        <>
          <Header />
          <main className="w-full flex-grow p-6 flex flex-col items-center">
            <div className="w-full max-w-3xl mt-16">
              <input
                type="text"
                placeholder="Search notes..."
                className="border text-black p-2 w-full rounded mb-4 border-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <NoteForm setNotes={setNotes} />
              <NoteList notes={filteredNotes} setNotes={setNotes} />
            </div>
          </main>
          <Footer /> {/* 👉 Insert footer here */}
        </>
      )}
    </div>
  );
};

export default App;
