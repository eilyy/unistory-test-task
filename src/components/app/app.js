import BlogPage from "../blog-page/blog-page";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import NotePage from "../note-page/note-page";
import {useState, useEffect} from "react";
import withNotesService from "../hoc/with-notes-service";

import "./app.css"

const App = (props) => {
    const [notes, setNotes] = useState({});

    useEffect(() => {
        if(Object.values(notes).length === 0) {
            setNotes(props.NotesService.notesList);
        }
    }, [notes, props.NotesService.notesList]);

    return (
        <Router>
          <div className="App">
              <Routes>
                  <Route exact path="/" element={<BlogPage notes={notes} setNotes={setNotes}/>} title="Блог"/>
                  <Route path="/:id" element={<NotePage notes={notes} setNotes={setNotes}/>} title="Блог"/>
              </Routes>
          </div>
        </Router>
    );
}

export default withNotesService()(App);