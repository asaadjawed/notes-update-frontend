import "./Notes.css";
import INOTE from "../interface/notes.interface";
import { FC } from "react";

type Props = {
  notes: INOTE;
  onNoteUpdate: (note:INOTE) => void;
};

const Notes: FC<Props> = ({ notes,onNoteUpdate }) => {


    const textUpdated = (event:any) => {
        console.log(event.target.innerText);

        const newTextValue = event.target.innerText;
        const newTextNode = {
          ...notes,
          text: newTextValue,
        }
        onNoteUpdate(newTextNode)
          }
  return (
    <>
      <div className="note">
        <div onBlur={textUpdated} className="Notes__text" contentEditable={true} suppressContentEditableWarning={true}>
          {notes?.text}
        </div>             
        <div className="Notes__link">
          <a href={notes?.link}> {notes?.link}</a>
        </div>                     
      </div>
    </>
  );
};
export default Notes;
