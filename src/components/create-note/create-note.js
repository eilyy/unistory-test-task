import "./create-note.css"
import {useState} from "react";
import withNotesService from "../hoc/with-notes-service";

const CreateNote = (props) => {
    const [post, setPost] = useState({});

    const onSave = () => {
        if(post.title && post.content) {
            props.setShowModal(false);
            const id = props.NotesService.generateId();
            const newNote = {...post, id};
            props.NotesService.addNote(id, newNote);
            props.setNotes(prevState => {
                return {...prevState, id: newNote};
            });
        }
    }

    return (
        <div className={`Modal ${props.showModal ? '' : 'Modal_hidden'}`}>
            <div className="CreateNote">
                <input className="CreateNote__titleInput" type="text" placeholder="Заголовок" onChange={(e) => setPost(prevState => {
                    return {...prevState, title: e.target.value};
                })}/>
                <textarea className="CreateNote__contentInput" placeholder="Содержание" onChange={(e) => setPost(prevState => {
                    return {...prevState, content: e.target.value};
                })}/>
                <div className="CreateNote__btnContainer">
                    <button className="CreateNote__btn" onClick={() => props.setShowModal(false)}>Отмена</button>
                    <button className="CreateNote__btn" onClick={onSave}>Сохранить</button>
                </div>
            </div>
        </div>
    );
}

export default withNotesService()(CreateNote);