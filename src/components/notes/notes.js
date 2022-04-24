import Note from "../note/note";
import "./notes.css"

const Notes = (props) => {
    return (
        <div className="Notes">
            {props.notes.map(note => <Note title={note.title} content={note.content} id={note.id} key={note.id}/>)}
        </div>
    );
}

export default Notes;