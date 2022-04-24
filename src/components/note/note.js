import "./note.css"
import {Link} from "react-router-dom";

const Note = (props) => {
    return (
        <div className="Note">
            <h2 className="Note__title">{props.title}</h2>
            <p className="Note__content">{props.content}</p>
            <Link to={`/${props.id}`}><button className="Note__button">Перейти</button></Link>

        </div>
    );
}

export default Note;