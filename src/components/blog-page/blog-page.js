import Notes from "../notes/notes";
import "./blog-page.css"
import {useState} from "react";
import CreateNote from "../create-note/create-note";

const BlogPage = (props) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="BlogPage">
            <h1 className="BlogPage__header">Блог</h1>
            <Notes notes={Object.values(props.notes)}/>
            <button className="BlogPage__createBtn" onClick={() => setShowModal(true)}>+ Добавить</button>
            <CreateNote setNotes={props.setNotes} showModal={showModal} setShowModal={setShowModal}/>
        </div>
    )
}

export default BlogPage;