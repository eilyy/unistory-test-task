import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import NotesService from "./services/notes-service/notes-service";
import NotesContext from "./components/context/notes-context";

const root = ReactDOM.createRoot(document.getElementById('root'));
const notesService = new NotesService();
root.render(
  <React.StrictMode>
    <NotesContext.Provider value={notesService}>
      <App />
    </NotesContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
