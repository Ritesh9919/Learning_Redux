import NoteList from "./NoteList";
import {useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actions} from '../redux/reducers/noteReducer';
import { notificationSelector } from "../redux/reducers/notificationReducer";
import { toast } from "react-toastify";
import { toastConfig } from "../utils";


const NoteForm = () => {
  const [noteText, setNoteText] = useState('');
  const dispatch = useDispatch();
  const message = useSelector(notificationSelector);
  
const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(actions.add(noteText));
  toast.success(message, toastConfig);
  setNoteText('');

}

  return (
    <>
    <h1>Note App</h1>
    <form className="note-form" onSubmit={handleSubmit}>
      <div>
        <textarea rows="5" cols="50" placeholder="type here..." value={noteText} onChange={(e)=> setNoteText(e.target.value)}></textarea>
      </div>
      <div>
        <button type="submit">Add Note</button>
      </div>
    </form>
    <NoteList/>
    </>
  );
};


export default NoteForm;
