import MDEditor from "@uiw/react-md-editor"
import { useEffect, useState } from "react"
import AddCircleIcon from '@mui/icons-material/AddCircle';

import Note from "./Components/Note"

function Notepad() {
    const [currentNote,setCurrentNote] = useState(0);
    const [notes, setNotes] = useState(
    localStorage.getItem("notes") === null 
    ? [{title: "# Enter title here",content: "# Enter title here",}]
    : JSON.parse(localStorage.getItem("notes")) 
  )

    function addNote(){
      setNotes([...notes,{
        title: "# Enter title here",
        content: "# Enter title here",
      }])
    }

    function deleteNote(e,idx){
        const copyNote = [...notes];
        copyNote.splice(idx, 1);
        setNotes(copyNote);
    }

    function changeCurrentNote(e,index){
        setCurrentNote(index)
    }
    function changesToNoteContent(text){
        let copyNote = [...notes];
        copyNote[currentNote].content = text;
       copyNote[currentNote].title = text.split("\n")[0];
        setNotes(copyNote)
    }
      useEffect(()=>{
          if(notes.length > 0){
             localStorage.setItem("notes",JSON.stringify(notes));
          }
      },[notes])

    //   useEffect(()=>{
    //     if(localStorage.getItem("notes")){
    //        let data = JSON.parse(localStorage.getItem("notes"));
    //        setNotes(data)
    //     }
    //   },[])
  return (
    <>
     <div className="container">
     <div className="left">
        <div className="heading">
            <h2>Notes</h2>
           <AddCircleIcon style={{cursor:"pointer"}} onClick={addNote}/>
        </div>
        <div className="notes-container">
              {notes.map((note,index)=>{
                return <Note key={index} deleteNote={deleteNote} id={index} changeCurrentNote={changeCurrentNote} title={note.title}/>
              })}
        </div>
     </div>
      <div className="right" data-color-mode="light">
        <MDEditor height={"80vh"} value={notes[currentNote].content}  onChange={(value) => changesToNoteContent(value)}  autoFocus />
      </div>
     </div>
    </>
  )
}

export default Notepad