import NoteList from "./NoteList";
import {useState } from 'react';
import {useDispatch} from 'react-redux';
import {actions} from '../redux/reducers/noteReducer';

const NoteForm = () => {
  const [noteText, setNoteText] = useState('');
  const dispatch = useDispatch();
  
const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(actions.add(noteText));
  setNoteText('');

}

  return (
    <>
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
