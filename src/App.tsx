import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Notes from "./Components/Notes";
import DUMMY_NOTES from "./DUMMY_NOTES";
import INOTE from "./interface/notes.interface";

function App() {
  const [notesList, setnotesList] = useState<any[]>([]);

  useEffect(() => {
    setnotesList(DUMMY_NOTES);
  }, []);
  // const getNotes = async () => {
  //   try{
  //       const response = await axios.get('http://localhost:5000/info')
  //      setnotesList(response.data.Notes);
  //       console.log(notesList,'see');
  //   }
  //   catch (err){
  //     console.log(err);
  //   }
  // }
  // console.log(notesList)

  const updateNoteItem = (UpdatedNote:INOTE)=> {
    console.log("value updated in the text component");
    console.log(UpdatedNote)
  }

  return (
    <>
      <div className="App">
        <div>Notes Application</div>

        <div className="notes_list">
          {notesList.map((noteItem, index) => {
            return <Notes notes={noteItem} key={index} onNoteUpdate={updateNoteItem} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
