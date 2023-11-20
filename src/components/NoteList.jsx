
import { useSelector, useDispatch } from "react-redux";
import { actions, noteReducer, noteSelector } from "../redux/reducers/noteReducer";


const NoteList = ()=> {
    const dispatch = useDispatch();
    const notes = useSelector(noteSelector);
    

 return (
    <div className="note-lists">
        {notes.map((note, index)=> {
            return (
                <div className="note-item">
                <p>{note.createdOn.toDateString()}</p>
                <h2>{note.text}</h2>
                <button onClick={()=> dispatch(actions.delete(index))}>Delete</button>
              </div>
            )
        })}
     
     
      
    </div>
 )

}


export default NoteList;