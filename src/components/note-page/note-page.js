import {Link, useNavigate, useParams} from "react-router-dom";
import withNotesService from "../hoc/with-notes-service";
import {useState} from "react";

import "./note-page.css"
import ConfirmationModal from "../confirmation-modal/confirmation-modal";

const NotePage = (props) => {
    const id = useParams().id.toString();
    const [post, setPost] = useState(props.NotesService.notesList[id]);
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const onSave = () => {
        if(post.title && post.content) {
            props.NotesService.addNote(id, post);
            props.setNotes(prevState => {
                const newNotes = {...prevState};
                newNotes[id] = post;
                return newNotes;
            });
            navigate('/');
        }
    }

    const onDelete = () => {
        setShowModal(true);
    }

    const deleteNote = () => {
        navigate('/');
        props.NotesService.deleteNote(id);
        props.setNotes(prevState => {
            const newNotes = {...prevState};
            delete newNotes[id];
            return newNotes;
        });
    }

    return (
        <div className="NotePage">
            <Link to="/">
                <button className="NotePage__backBtn">Назад</button>
            </Link>
            <input className="NotePage__titleInput" type="text" placeholder="Заголовок" defaultValue={props.NotesService.notesList[id].title} onChange={(e) => setPost(prevState => {
                return {...prevState, title: e.target.value};
            })}/>
            <textarea className="NotePage__contentInput" placeholder="Содержание" defaultValue={props.NotesService.notesList[id].content} onChange={(e) => setPost(prevState => {
                return {...prevState, content: e.target.value};
            })}/>
            <div className="NotePage__btnContainer">
                <button className="NotePage__btn NotePage__deleteBtn" onClick={onDelete}>Удалить</button>
                <button className="NotePage__btn" onClick={onSave}>Сохранить</button>
            </div>
            <ConfirmationModal showModal={showModal} setShowModal={setShowModal} deleteNote={deleteNote}/>
        </div>
    );
}

export default withNotesService()(NotePage);